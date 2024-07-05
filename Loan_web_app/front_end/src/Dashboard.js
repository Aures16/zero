import React, { useEffect, useState } from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from './header';
import Footer from './Footer';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';

const Dashboard = ({ email }) => {
  const [demandes, setDemandes] = useState([]);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/emprunteur/${email}/demandes`);
        setDemandes(response.data);
      } catch (error) {
        console.error('Erreur de récupération des demandes', error);
      }
    };

    fetchDemandes();
  }, [email]);

  const handleNewRequest = () => {
    navigate('/new-request');
  };

  const handleDemandeClick = (demande) => {
    setSelectedDemande(demande);
  };

  const statusColorMap = {
    'accepté': 'success',
    'rejeté': 'danger',
    'en attente': 'warning'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-200 p-4">
          <button onClick={handleNewRequest} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mb-4">
            Nouvelle demande
          </button>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
            {demandes.map((demande) => (
              <MDBListGroupItem 
                key={demande.id} 
                onClick={() => handleDemandeClick(demande)} 
                className="d-flex justify-content-between align-items-center cursor-pointer p-2 hover:bg-gray-300 rounded-lg"
              >
                <div>
                  <div className='fw-bold'>{demande.date} - {demande.montant} €</div>
                </div>
                <MDBBadge pill light color={statusColorMap[demande.statut]}>
                  {demande.statut}
                </MDBBadge>
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </div>
        <div className="w-3/4 p-4">
          {selectedDemande ? (
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Détails de la demande</h2>
              <p>ID: {selectedDemande.id}</p>
              <p>Montant: {selectedDemande.montant} €</p>
              <p>Statut: {selectedDemande.statut}</p>
              <p>Date: {selectedDemande.date}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Télécharger le reçu</button>
            </div>
          ) : (
            <p>Sélectionnez une demande pour voir les détails.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
