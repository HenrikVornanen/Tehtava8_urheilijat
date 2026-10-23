-- Luodaan tietokanta urheilijoiden tietoja varten
CREATE DATABASE IF NOT EXISTS urheilijat_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE urheilijat_db;

-- Luodaan taulu, johon urheilijoiden tiedot tallennetaan
CREATE TABLE IF NOT EXISTS urheilijat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    etunimi VARCHAR(100),
    sukunimi VARCHAR(100),
    kutsumanimi VARCHAR(100),
    syntymaaika DATE,
    paino DECIMAL(5,2),
    kuva_url VARCHAR(500),
    laji VARCHAR(100),
    saavutukset TEXT
) CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;