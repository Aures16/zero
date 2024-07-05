import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import logoargent from './img/banque.jpg';
import logobanque from './img/fin.jpg';
import logogestion from './img/cl1.jpg';
import logoautom from './img/autom.jpg';
import logoconfid from './img/sec3.jpg';
import logopret from './img/option.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
  <div className="min-h-screen flex flex-col">
      <Navbar />
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Bienvenue sur notre Plateforme de Prêt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      style={{ gap: '1rem' }}>
        <div className=" shadow-lg rounded-lg overflow-hidden hover:translate-x-1"
        style={{backgroundImage: `url(${logobanque})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
          {/* <img src={logobanque} alt="Bank" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Banque</h2>
            <p className="text-black-600 hover:font-bold">Des solutions bancaires adaptées à vos besoins de prêt.</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:translate-x-1"
        style={{backgroundImage: `url(${logoargent})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'}}>
          {/* <img src="https://source.unsplash.com/600x400/?money" alt="Money" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Argent</h2>
            <p className="text-black-600 hover:font-bold">Financement rapide et flexible pour réaliser vos projets.</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:translate-x-1"
        style={{backgroundImage: `url(${logogestion})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
          {/* <img src="https://source.unsplash.com/600x400/?money" alt="Money" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Optimisation de la Gestion des Dossiers</h2>
            <p className="text-black-600 hover:font-bold">Gérez vos demandes de prêt de manière efficace.</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:translate-y-1"
        style={{backgroundImage: `url(${logoautom})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
          {/* <img src="https://source.unsplash.com/600x400/?money" alt="Money" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Automatisation de la Vérification de l'Éligibilité</h2>
            <p className="text-black-600 hover:font-bold">Vérification instantanée de votre éligibilité au prêt.</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:translate-y-1"
        style={{backgroundImage: `url(${logoconfid})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
          {/* <img src="https://source.unsplash.com/600x400/?money" alt="Money" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Sécurisation des Données et Confidentialité</h2>
            <p className="text-black-600 hover:font-bold">Vos données sont protégées avec les plus hauts standards de sécurité, assurant une confidentialité totale tout au long du processus.</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden hover:translate-y-1"
        style={{backgroundImage: `url(${logopret})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
          {/* <img src="https://source.unsplash.com/600x400/?loan" alt="Loan" className="w-full h-48 object-cover"/> */}
          <div className="mt-40 p-4">
            <h2 className="text-2xl font-bold text-green-600 hover:font-extrabold">Prêt</h2>
            <p className="text-black-600 hover:font-bold">Des options de prêt adaptées à vos besoins personnels.</p>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</div>
  );
}

export default Home;
