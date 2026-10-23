import { useState, useContext } from "react";
import { UrheilijaContext } from "../context/UrheilijaContext";

function UrheilijaForm({ muokattava, lopetaMuokkaus }) {
  const { addUrheilija, updateUrheilija } = useContext(UrheilijaContext);

  //Jos muokataan vanhaa urheilijaa, näytetään sen tiedot
  // Uutta lisättäessä aloitetaan tyhjällä lomakkeella
  const [urheilija, setUrheilija] = useState(
    muokattava || {
      etunimi: "",
      sukunimi: "",
      kutsumanimi: "",
      syntymaaika: "",
      paino: "",
      kuva_url: "",
      laji: "",
      saavutukset: "",
    },
  );

  // Päivitetään kentän arvo, kun käyttäjä kirjoittaa siihen
  const handleChange = (e) => {
    setUrheilija({
      ...urheilija,
      [e.target.name]: e.target.value,
    });
  };

  // Tallennetaan joko uusi urheilija tai vanhan urheilijan muutokset
  const handleSubmit = (e) => {
    e.preventDefault();

    if (muokattava) {
      updateUrheilija(muokattava.id, urheilija);
      lopetaMuokkaus();
    } else {
      addUrheilija(urheilija);
      lopetaMuokkaus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-4 mx-auto mb-4 text-light"
      style={{
        maxWidth: "600px",
        backgroundColor: "#2b3035",
        border: "1px solid #0d6efd",
      }}
    >
      <h3>{muokattava ? "Muokkaa urheilijaa" : "Lisää urheilija"}</h3>

      {/* Luodaan lomakkeen kentät urheilijan tiedoista, mutta jätetään id pois */}
      {Object.keys(urheilija)
        .filter((kentta) => kentta !== "id")
        .map((kentta) => (
          <div className="mb-3" key={kentta}>
            <label className="form-label">
              {
                {
                  etunimi: "Etunimi",
                  sukunimi: "Sukunimi",
                  kutsumanimi: "Kutsumanimi",
                  syntymaaika: "Syntymäaika",
                  paino: "Paino (kg)",
                  kuva_url: "Kuvan URL-osoite",
                  laji: "Laji",
                  saavutukset: "Saavutukset",
                }[kentta]
              }
            </label>
            <input
              className="form-control"
              type={
                kentta === "syntymaaika"
                  ? "date"
                  : kentta === "paino"
                    ? "number"
                    : "text"
              }
              name={kentta}
              required={kentta === "syntymaaika"}
              value={
                kentta === "syntymaaika" && urheilija[kentta]
                  ? urheilija[kentta].slice(0, 10)
                  : urheilija[kentta] || ""
              }
              onChange={handleChange}
            />
          </div>
        ))}

      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-success flex-fill" type="submit">
          Tallenna
        </button>

        <button
          type="button"
          className="btn btn-secondary flex-fill"
          onClick={lopetaMuokkaus}
        >
          Peruuta
        </button>
      </div>
    </form>
  );
}

export default UrheilijaForm;
