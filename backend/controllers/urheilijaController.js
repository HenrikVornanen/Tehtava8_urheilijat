const Urheilija = require("../models/Urheilija");

// Haetaan kaikki urheilijat
const getAllUrheilijat = (req, res) => {
  Urheilija.getAllUrheilijat((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
};

// Lisätään uusi urheilija
const addUrheilija = (req, res) => {
  const uusiUrheilija = req.body;

  Urheilija.addUrheilija(uusiUrheilija, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Urheilija lisätty onnistuneesti",
      id: result.insertId,
    });
  });
};

// Päivitetään urheilijan tiedot
const updateUrheilija = (req, res) => {
  const id = req.params.id;
  const urheilija = req.body;

  Urheilija.updateUrheilija(id, urheilija, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Urheilijaa ei löytynyt" });
    }

    res.json({ message: "Urheilijan tiedot päivitetty onnistuneesti" });
  });
};

// Poistetaan urheilija
const deleteUrheilija = (req, res) => {
  const id = req.params.id;

  Urheilija.deleteUrheilija(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Urheilijaa ei löytynyt" });
    }

    res.json({ message: "Urheilija poistettu onnistuneesti" });
  });
};

module.exports = {
  getAllUrheilijat,
  addUrheilija,
  updateUrheilija,
  deleteUrheilija,
};
