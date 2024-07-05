import React, { useState } from 'react';
import './EmprunteurForm.css'; // Importer le fichier CSS
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './axios';
import 'tailwindcss/tailwind.css';
import Header from './header';
import Footer from './Footer'; // Assurez-vous que Tailwind CSS est configuré

function Register() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register_analyste', formData);
      console.log(response.data);
      alert('Emprunteur enregistré avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement', error);
      alert('Erreur lors de l\'enregistrement');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-2">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full justify-center bgcenter mt-10 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Enregister L'Analyste de risque</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Prénom :</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Mot de passe :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Enregistrer l'analyste
          </button>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
