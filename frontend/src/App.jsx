import { useContext, useState } from "react";
import { UrheilijaContext } from "./context/UrheilijaContext";
import UrheilijaForm from "./components/UrheilijaForm";

function App() {
  const { urheilijat, deleteUrheilija } = useContext(UrheilijaContext);

  //Pidetään muistissa, ketä muokataan ja onko lomake näkyvissä
  const [muokattava, setMuokattava] = useState(null);
  const [naytaLomake, setNaytaLomake] = useState(false);

  return (
    <div className="container-fluid px-4 py-5 min-vh-100 bg-dark text-light">
      <h1 className="text-center mb-3">Urheilijarekisteri</h1>

      <p className="text-center text-secondary mb-4">
        Lisää, muokkaa ja hallitse urheilijoiden tietoja.
      </p>
      <div className="text-center mb-4">
        <button
          className="btn btn-primary px-4 py-2"
          onClick={() => {
            setMuokattava(null);
            setNaytaLomake(true);
          }}
        >
          + Lisää urheilija
        </button>
      </div>

      {naytaLomake && (
        <UrheilijaForm
          key={muokattava?.id || "uusi"}
          muokattava={muokattava}
          lopetaMuokkaus={() => {
            setMuokattava(null);
            setNaytaLomake(false);
          }}
        />
      )}

      <div className="row g-4 justify-content-center">
        {urheilijat.map((urheilija) => (
          <div
            className="col-12 col-md-6 col-xl-4"
            key={urheilija.id}
            style={{ maxWidth: "380px" }}
          >
            <div
              className="card h-100 text-light"
              style={{
                backgroundColor: "#2b3035",
                border: "1px solid #0d6efd",
              }}
            >
              <div className="card-body d-flex flex-column text-center">
                {/* Kuvan paikka on kaikilla urheilijoilla samankokoinen */}
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{ height: "140px" }}
                >
                  {urheilija.kuva_url ? (
                    <img
                      src={urheilija.kuva_url}
                      alt={urheilija.etunimi}
                      className="rounded"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center 20%",
                      }}
                    />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center rounded"
                      style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#343a40",
                        color: "#adb5bd",
                        border: "1px dashed #6c757d",
                      }}
                    >
                      Ei kuvaa
                    </div>
                  )}
                </div>

                {/* Urheilijan tiedot */}
                <h4 className="card-title">
                  {urheilija.etunimi} {urheilija.sukunimi}
                </h4>

                {/* Urheilijan tiedot omassa laatikossa */}
                <div
                  className="rounded p-3 mb-3 text-start"
                  style={{
                    backgroundColor: "#212529",
                    border: "1px solid #495057",
                  }}
                >
                  <div className="mb-2">
                    <strong className="text-info">Kutsumanimi:</strong>{" "}
                    {urheilija.kutsumanimi || "–"}
                  </div>

                  <hr className="border-secondary" />

                  <div className="mb-2">
                    <strong className="text-info">Syntymäaika:</strong>{" "}
                    {urheilija.syntymaaika?.slice(0, 10) || "–"}
                  </div>

                  <hr className="border-secondary" />

                  <div className="mb-2">
                    <strong className="text-info">Paino:</strong>{" "}
                    {urheilija.paino ? `${urheilija.paino} kg` : "–"}
                  </div>

                  <hr className="border-secondary" />

                  <div className="mb-2">
                    <strong className="text-info">Laji:</strong>{" "}
                    {urheilija.laji || "–"}
                  </div>

                  <hr className="border-secondary" />

                  <div>
                    <strong className="text-info">Saavutukset:</strong>
                    <div className="mt-1">{urheilija.saavutukset || "–"}</div>
                  </div>
                </div>

                {/* Painikkeet */}
                <div className="mt-auto pt-3">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setMuokattava(urheilija);
                      setNaytaLomake(true);
                    }}
                  >
                    Muokkaa
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (
                        window.confirm("Haluatko varmasti poistaa urheilijan?")
                      ) {
                        deleteUrheilija(urheilija.id);
                      }
                    }}
                  >
                    Poista
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
