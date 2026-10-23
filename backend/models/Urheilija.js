const db = require("../config/db");

// Haetaan kaikki urheilijat tietokannasta
const getAllUrheilijat = (callback) => {
  const sql = "SELECT * FROM urheilijat";
  db.query(sql, callback);
};

// Lisätään uusi urheilija tietokantaan
const addUrheilija = (urheilija, callback) => {
  const sql = `INSERT INTO urheilijat
    (etunimi, sukunimi, kutsumanimi, syntymaaika, paino, kuva_url, laji, saavutukset)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    urheilija.etunimi,
    urheilija.sukunimi,
    urheilija.kutsumanimi,
    urheilija.syntymaaika,
    urheilija.paino,
    urheilija.kuva_url,
    urheilija.laji,
    urheilija.saavutukset,
  ];

  db.query(sql, values, callback);
};

// Päivitetään urheilijan tiedot
const updateUrheilija = (id, urheilija, callback) => {
  const sql = `UPDATE urheilijat SET
    etunimi = ?,
    sukunimi = ?,
    kutsumanimi = ?,
    syntymaaika = ?,
    paino = ?,
    kuva_url = ?,
    laji = ?,
    saavutukset = ?
    WHERE id = ?`;

  const values = [
    urheilija.etunimi,
    urheilija.sukunimi,
    urheilija.kutsumanimi,
    urheilija.syntymaaika,
    urheilija.paino,
    urheilija.kuva_url,
    urheilija.laji,
    urheilija.saavutukset,
    id,
  ];

  db.query(sql, values, callback);
};

// Poistetaan urheilija tietokannasta
const deleteUrheilija = (id, callback) => {
  const sql = "DELETE FROM urheilijat WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  getAllUrheilijat,
  addUrheilija,
  updateUrheilija,
  deleteUrheilija,
};
