# Urheilijarekisteri

Tämä projekti on toteutettu osana Karelia-ammattikorkeakoulun JavaScript-ohjelmoinnin harjoitustehtävää.
Sovelluksella voi tarkastella, lisätä, muokata ja poistaa urheilijoiden tietoja. Tiedot tallennetaan MariaDB-tietokantaan.

## Käytetyt teknologiat
- Frontend: React, JavaScript, Context API, Bootstrap ja Vite
- Backend: Node.js, Express.js ja REST API
- Tietokanta: MariaDB

## Ominaisuudet
- Urheilijoiden tietojen näyttäminen
- Uuden urheilijan lisääminen
- Urheilijan tietojen muokkaaminen
- Urheilijan poistaminen
- Urhelijoiden kuvien näyttäminen


## Projektin rakenne
Backendin kansiorakenne perustuu opettajan antamaan esimerkkimalliin, jota sovelsin tässä tehtävässä.

- routes - REST-rajapinnan reitit
- controllers- pyyntöjen käsittely
- models- tietokantatoiminnot
- config - tietokantayhteys

Frontend on toteutettu Reactin funktionaalisilla komponenteilla ja Context API.

## Kuvakaappaukset

### Sovelluksen etusivu, jossa näkyvät tallennetut urheilijat.
<img width="1772" height="959" alt="image" src="https://github.com/user-attachments/assets/626fc7ce-3506-4450-b463-3446862811f3" /> 

### Lomake, jolla voi lisätä uuden urheilijan.
<img width="2263" height="1056" alt="image" src="https://github.com/user-attachments/assets/7a03c02b-21a2-4516-8470-852442a91506" />

### Muokkauslomake, johon valitun urheilijan tiedot tulevat valmiiksi.

<img width="1852" height="1039" alt="image" src="https://github.com/user-attachments/assets/db40ecc8-69bf-46ee-bbb2-261f8db1f4ec" />

## Käynnistäminen
Projektin käyttö vaatii Node.js ja MariaDB.

1. Luo tietokanta suorittamalla luonti.sql.
2. Lisää tietokantayhteyden asetukset backend/.env-tiedostoon.
3. Käynnistä backend:

```bash
cd backend
npm install
node server.js
```

4. Käynnistä frontend toisessa terminaalissa:

```bash
cd frontend
npm install
npm run dev
```

