// src/LoanApplicationForm.js
import React, { useState } from 'react';
import './LoanApplicationForm.css';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    montant: '',
    objet: '',
    self_employed: '',
    duree_pret: '',
    nbre_charge: '',
    historique_credit: '',
    marier: '',
    sexe: '',
    zone_habitation: '',
    education: '',
    revenu_mensuel: '',
    revenu_conjoint: '',
    type_pret: '',
    date_remb: '',
    photo_identite: null,
    piece_identite: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <div>
        <label>Montant:</label>
        <input type="number" name="montant" value={formData.montant} onChange={handleChange} required />
      </div>
      <div>
        <label>Objet:</label>
        <input type="text" name="objet" value={formData.objet} onChange={handleChange} required />
      </div>
      <div>
        <label>Etes travailleur indépendants ?:</label>
        <select name="self_employed" value={formData.self_employed} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="OUI">OUI</option>
          <option value="NON">NON</option>
        </select>
      </div>
      <div>
        <label>Durée du prêt (mois):</label>
        <input type="number" name="duree_pret" value={formData.duree_pret} onChange={handleChange} required />
      </div>
      <div>
        <label>Nombre de personnes à charge:</label>
        <input type="number" name="nbre_charge" value={formData.nbre_charge} onChange={handleChange} />
      </div>
      <div>
        <label>Historique de crédit:</label>
        <select name="historique_credit:" value={formData.historique_credit} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Mauvaise">Mauvaise</option>
          <option value="Bonne">Bonne</option>
        </select>
      </div>
      <div>
        <label>Married:</label>
        <select name="marier" value={formData.marier} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>
      <div>
        <label>Sexe:</label>
        <select name="sexe" value={formData.sexe} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Zone d'habitation:</label>
        <select name="zone_habitation" value={formData.zone_habitation} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Urban">Urban</option>
          <option value="Semiurban">Semiurban</option>
          <option value="rural">Rural</option>
        </select>
      </div>
      <div>
        <label>Education:</label>
        <select name="education" value={formData.education} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Not Graduate">Not Graduate</option>
          <option value="Graduate">Graduate</option>
        </select>
      </div>
      <div>
        <label>Revenu Mensuel:</label>
        <input type="number" name="revenu_mensuel" value={formData.revenu_mensuel} onChange={handleChange} required />
      </div>
      <div>
        <label>Revenu Conjoint:</label>
        <input type="number" name="revenu_conjoint" value={formData.revenu_conjoint} onChange={handleChange} />
      </div>
      <div>
        <label>Type de prêt:</label>
        <input type="text" name="type_pret" value={formData.type_pret} onChange={handleChange} required />
      </div>
      <div>
        <label>Date de remboursement:</label>
        <input type="date" name="date_remb" value={formData.date_remb} onChange={handleChange} />
      </div>
      <div>
        <label>Photo d'identité:</label>
        <input type="file" name="photo_identite" onChange={handleFileChange} />
      </div>
      <div>
        <label>Pièce d'identité:</label>
        <input type="file" name="piece_identite" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanApplicationForm;
