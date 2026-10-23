const express = require("express");
const router = express.Router();

const urheilijaController = require("../controllers/urheilijaController");

// Haetaan kaikki urheilijat
router.get("/", urheilijaController.getAllUrheilijat);

// Lisätään uusi urheilija
router.post("/", urheilijaController.addUrheilija);

// Päivitetään urheilijan tiedot
router.put("/:id", urheilijaController.updateUrheilija);

// Poistetaan urheilija
router.delete("/:id", urheilijaController.deleteUrheilija);

module.exports = router;
