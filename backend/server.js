const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const urheilijaRoutes = require("./routes/urheilijaRoutes");

const app = express();
const PORT = 3000;

// Sallitaan pyynnöt Reactista
app.use(cors());

// Muutetaan JSON-data JavaScript-olioksi
app.use(express.json());

// Urheilijoiden REST-reitit
app.use("/api/urheilijat", urheilijaRoutes);

// Testataan tietokantayhteys
db.connect((err) => {
  if (err) {
    console.log("Tietokantayhteys epäonnistui:", err.message);
  } else {
    console.log("Tietokantayhteys toimii!");
  }
});

// Käynnistetään palvelin
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
