-- Création de la base de données
CREATE DATABASE creditsmart;
USE creditsmart;

-- Table des emprunteurs
CREATE TABLE emprunteurs (
  id_emprunteur INT AUTO_INCREMENT PRIMARY KEY,
  nom_emprunteur VARCHAR(255) NOT NULL,
  prenom_emprunteur VARCHAR(255) NOT NULL,
  email_emprunteur VARCHAR(255) UNIQUE NOT NULL,
  telephone_emprunteur VARCHAR(255),
  emploi_emprunteur VARCHAR(255),
  password_emprunteur VARCHAR(255) NOT NULL
);

-- Table des demandes de prêt
CREATE TABLE demandes_pret (
    id_demande INT AUTO_INCREMENT PRIMARY KEY,
    montant DECIMAL(10,2) NOT NULL,  
    objet VARCHAR(255) NOT NULL,
    self_employed ENUM('OUI', 'NON') ,
    duree_pret INT NOT NULL, -- Durée du prêt en mois
    nbre_charge INT, -- Indicateur du nombre de personne à la charge du client 
    historique_credit TINYINT NOT NULL,
    marier ENUM('Yes', 'No') NOT NULL, -- Indicateur si l'emprunteur est marié
    sexe ENUM('Male', 'Female') NOT NULL, -- Sexe de l'emprunteur
    zone_habitation ENUM('Urban', 'Semiurban', 'rural') NOT NULL, -- Zone d'habitation de l'emprunteur
    education ENUM('Not Graduate', 'Graduate') NOT NULL, -- Niveau d'éducation de l'emprunteur
    revenu_mensuel DECIMAL(10,2) NOT NULL, -- Revenu mensuel de l'emprunteur
    revenu_conjoint DECIMAL(10,2), -- Revenu mensuel du/de la conjointe (peut être NULL)
    statut ENUM('En attente', 'Approuvée', 'Rejetée') NOT NULL DEFAULT 'En attente',
    id_emprunteur INT NOT NULL,
    type_pret VARCHAR(255) NOT NULL, -- Type de prêt validé
    date_remb DATE,
    photo_identite MEDIUMBLOB, -- Champ pour stocker la photo d'identité
    piece_identite MEDIUMBLOB, -- Champ pour stocker la pièce d'identité
    FOREIGN KEY (id_emprunteur) REFERENCES emprunteurs(id_emprunteur)
);


-- Table des analyste_risque 
CREATE TABLE analyste_risque  (
  id_analyste INT AUTO_INCREMENT PRIMARY KEY,
  nom_analyste VARCHAR(255) NOT NULL,
  prenom_analyste VARCHAR(255) NOT NULL,
  email_analyste VARCHAR(255) UNIQUE NOT NULL,
  password_analyste VARCHAR(255) NOT NULL
);

-- Table de l'administrateur
 CREATE TABLE admin (
  id_admin INT AUTO_INCREMENT PRIMARY KEY,
  nom_admin VARCHAR(255) NOT NULL,
  prenom_admin VARCHAR(255) NOT NULL,
  telephon_admin INT,
  email_admin VARCHAR(255) UNIQUE NOT NULL,
  address_admin VARCHAR(255) NOT NULL,
  password_admin VARCHAR(255) NOT NULL
);
-- Table de l'utilisateur
 CREATE TABLE User (
  id_user INT AUTO_INCREMENT PRIMARY KEY,
  email_user VARCHAR(255),
  password_user VARCHAR(255) NOT NULL
);

INSERT INTO emprunteurs (nom_emprunteur, prenom_emprunteur, email_emprunteur, telephone_emprunteur, emploi_emprunteur, password_emprunteur)
VALUES ('John', 'Doe', 'john.doe@example.com', '+1234567890', 'Ingénieur', 'motdepasse');

INSERT INTO demandes_pret (montant, objet, self_employed, duree_pret, nbre_charge, historique_credit, marier, sexe, zone_habitation, education, revenu_mensuel, revenu_conjoint, id_emprunteur, type_pret)
VALUES (10000.00, 'Achat de voiture', 'OUI', 36, 2, 1, 'Yes', 'Male', 'Urban', 'Graduate', 5000.00, 3000.00, 1, 'Prêt personnel');

INSERT INTO analyste_risque (nom_analyste, prenom_analyste, email_analyste, password_analyste)
VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'motdepasse');

INSERT INTO admin (nom_admin, prenom_admin, telephon_admin, email_admin, address_admin, password_admin)
VALUES ('Admin', 'Super', 1234567890, 'admin@example.com', '123 Rue Principale', 'motdepasse');

INSERT INTO User (email_user, password_user)
VALUES ('user@example.com', 'motdepasse');
