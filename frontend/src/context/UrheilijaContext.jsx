import { createContext, useState, useEffect } from "react";

// Contextin avulla urheilijoiden tiedot saadaan käyttöön eri komponenteissa
export const UrheilijaContext = createContext();

export function UrheilijaProvider({ children }) {
  const [urheilijat, setUrheilijat] = useState([]);

  // Haetaan urheilijat backendistä, kun sovellus avataan
  useEffect(() => {
    fetch("http://localhost:3000/api/urheilijat")
      .then((response) => response.json())
      .then((data) => setUrheilijat(data))
      .catch((error) => console.log("Virhe haettaessa urheilijoita:", error));
  }, []);

  // Lähetetään uuden urheilijan tiedot backendille
  const addUrheilija = (uusiUrheilija) => {
    fetch("http://localhost:3000/api/urheilijat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uusiUrheilija),
    })
      .then((response) => response.json())
      .then(() => {
        // Haetaan lista uudelleen, jotta uusi urheilija näkyy sivulla
        fetch("http://localhost:3000/api/urheilijat")
          .then((response) => response.json())
          .then((data) => setUrheilijat(data));
      })
      .catch((error) => console.log("Virhe lisättäessä urheilijaa:", error));
  };

  // Poistetaan urheilija tietokannasta sen id:n perusteella
  const deleteUrheilija = (id) => {
    fetch(`http://localhost:3000/api/urheilijat/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Urheilijan poistaminen epäonnistui");
        }

        // Poistetaan urheilija myös näkyvästä listasta
        setUrheilijat((vanhat) =>
          vanhat.filter((urheilija) => urheilija.id !== id),
        );
      })
      .catch((error) => console.log("Virhe poistettaessa urheilijaa:", error));
  };

  // Tallennetaan urheilijan muokatut tiedot backendiin
  const updateUrheilija = (id, urheilija) => {
    fetch(`http://localhost:3000/api/urheilijat/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urheilija),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Urheilijan päivittäminen epäonnistui");
        }

        // Haetaan päivitetty lista, jotta muutokset näkyvät sivulla
        return fetch("http://localhost:3000/api/urheilijat");
      })
      .then((response) => response.json())
      .then((data) => setUrheilijat(data))
      .catch((error) => console.log("Virhe päivitettäessä urheilijaa:", error));
  };

  // Jaetaan urheilijoiden tiedot ja toiminnot muille komponenteille
  return (
    <UrheilijaContext.Provider
      value={{ urheilijat, addUrheilija, deleteUrheilija, updateUrheilija }}
    >
      {children}
    </UrheilijaContext.Provider>
  );
}
