import React, { useState } from 'react';
import './index.css';
import Header from './header';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './axios'; // Assurez-vous d'avoir un fichier CSS pour les styles supplémentaires

const NewRequest = ({ email }) => {
  const [formData, setFormData] = useState({
    montant: '',
    objet: '',
    self_employed: 'NON',
    duree_pret: '',
    nbre_charge: '',
    historique_credit: '',
    marier: 'No',
    sexe: 'Male',
    zone_habitation: 'Urban',
    education: 'Not Graduate',
    revenu_mensuel: '',
    revenu_conjoint: '',
    type_pret: '',
    date_remb: '',
    photo_identite: null,
    piece_identite: null,
    id_emprunteur: email,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/emprunteur/${email}/demande`, formData)
      .then(response => {
        alert('Demande soumise avec succès');
      })
      .catch(error => {
        console.error('Erreur de soumission de la demande', error);
        alert('Erreur de soumission de la demande');
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
     <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md h-96 overflow-y-auto">
        <h2 className="text-2xl text-green-800 font-bold mb-4">Nouvelle Demande de Prêt</h2>
        
        <div className="mb-4">
          <label htmlFor="montant" className="block text-sm font-medium leading-6 text-gray-900">Montant:</label>
          <input
            id="montant"
            name="montant"
            type="number"
            value={formData.montant}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="objet" className="block text-sm font-medium leading-6 text-gray-900">Objet:</label>
          <input
            id="objet"
            name="objet"
            type="text"
            value={formData.objet}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="self_employed" className="block text-sm font-medium leading-6 text-gray-900">Self Employed:</label>
          <select
            id="self_employed"
            name="self_employed"
            value={formData.self_employed}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="duree_pret" className="block text-sm font-medium leading-6 text-gray-900">Durée du prêt (mois):</label>
          <input
            id="duree_pret"
            name="duree_pret"
            type="number"
            value={formData.duree_pret}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nbre_charge" className="block text-sm font-medium leading-6 text-gray-900">Nombre de charges:</label>
          <input
            id="nbre_charge"
            name="nbre_charge"
            type="number"
            value={formData.nbre_charge}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="historique_credit" className="block text-sm font-medium leading-6 text-gray-900">Historique de crédit (1: bon, 0: mauvais):</label>
          <input
            id="historique_credit"
            name="historique_credit"
            type="number"
            value={formData.historique_credit}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="marier" className="block text-sm font-medium leading-6 text-gray-900">Marier:</label>
          <select
            id="marier"
            name="marier"
            value={formData.marier}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">Sexe:</label>
          <select
            id="sexe"
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Male">Masculin</option>
            <option value="Female">Féminin</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="zone_habitation" className="block text-sm font-medium leading-6 text-gray-900">Zone d'habitation:</label>
          <select
            id="zone_habitation"
            name="zone_habitation"
            value={formData.zone_habitation}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Urban">Urbain</option>
            <option value="Semiurban">Semiurbain</option>
            <option value="rural">Rural</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Niveau d'éducation:</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Not Graduate">Non diplômé</option>
            <option value="Graduate">Diplômé</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="revenu_mensuel" className="block text-sm font-medium leading-6 text-gray-900">Revenu mensuel:</label>
          <input
            id="revenu_mensuel"
            name="revenu_mensuel"
            type="number"
            value={formData.revenu_mensuel}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="revenu_conjoint" className="block text-sm font-medium leading-6 text-gray-900">Revenu conjoint:</label>
          <input
            id="revenu_conjoint"
            name="revenu_conjoint"
            type="number"
            value={formData.revenu_conjoint}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type_pret" className="block text-sm font-medium leading-6 text-gray-900">Type de prêt:</label>
          <input
            id="type_pret"
            name="type_pret"
            type="text"
            value={formData.type_pret}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date_remb" className="block text-sm font-medium leading-6 text-gray-900">Date de remboursement:</label>
          <input
            id="date_remb"
            name="date_remb"
            type="date"
            value={formData.date_remb}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo_identite" className="block text-sm font-medium leading-6 text-gray-900">Photo d'identité:</label>
          <input
            id="photo_identite"
            name="photo_identite"
            type="file"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="piece_identite" className="block text-sm font-medium leading-6 text-gray-900">Pièce d'identité:</label>
          <input
            id="piece_identite"
            name="piece_identite"
            type="file"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Soumettre la demande</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default NewRequest;
