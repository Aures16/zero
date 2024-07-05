import React, { useEffect, useState } from 'react';
import axios from './axios';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
import './index.css';
import HeaderAnalyste from './headerAnalyste';
import Footer from './Footer';

const DashboardAnalyste = () => {
  const [demandes, setDemandes] = useState([]);
  const [selectedDemande, setSelectedDemande] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/demandes/en_attente');
        setDemandes(response.data);
      } catch (error) {
        console.error('Erreur de récupération des demandes', error);
      }
    };

    fetchDemandes();
  }, []);

  const handleDemandeClick = (demande) => {
    setSelectedDemande(demande);
    setPredictionResult(null); // Réinitialiser le résultat de la prédiction
  };

  const handlePredictEligibility = async () => {
    if (!selectedDemande) return;
    
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        Loan_ID: selectedDemande.id,
        Gender: selectedDemande.gender,
        Married: selectedDemande.married,
        Dependents: selectedDemande.dependents,
        Education: selectedDemande.education,
        Self_Employed: selectedDemande.self_employed,
        ApplicantIncome: selectedDemande.applicant_income,
        CoapplicantIncome: selectedDemande.coapplicant_income,
        LoanAmount: selectedDemande.loan_amount,
        Loan_Amount_Term: selectedDemande.loan_amount_term,
        Credit_History: selectedDemande.credit_history,
        Property_Area: selectedDemande.property_area,
      });
      setPredictionResult(response.data);
    } catch (error) {
      console.error('Erreur de prédiction d\'éligibilité', error);
    }
  };

  const handleUpdateStatus = async (status) => {
    if (!selectedDemande) return;

    try {
      await axios.put(`http://localhost:5000/demandes/${selectedDemande.id}/status`, { status });
      // Mettez à jour la liste des demandes après le changement de statut
      setDemandes(demandes.filter(demande => demande.id !== selectedDemande.id));
      setSelectedDemande(null);
      setPredictionResult(null);
    } catch (error) {
      console.error('Erreur de mise à jour du statut', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderAnalyste />
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-200 p-4">
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
                <MDBBadge pill light color="warning">
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
              <button 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={handlePredictEligibility}
              >
                Prédire l'éligibilité
              </button>
              {predictionResult && (
                <div className="mt-4">
                  <p>{predictionResult.message}</p>
                  <p>Précision éligible: {predictionResult.precision_eligible}</p>
                  <p>Précision non éligible: {predictionResult.precision_non_eligible}</p>
                  <div>
                    <button 
                      className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                      onClick={() => handleUpdateStatus('accepté')}
                    >
                      Accorder
                    </button>
                    <button 
                      className="bg-red-500 text-white py-2 px-4 rounded-lg"
                      onClick={() => handleUpdateStatus('rejeté')}
                    >
                      Rejeter
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Sélectionnez une demande pour voir la traiter.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardAnalyste;
