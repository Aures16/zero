import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">À Propos</h1>
      <p className="text-center text-gray-700">
        Notre plateforme utilise l'apprentissage automatique pour évaluer l'éligibilité aux prêts de manière rapide et précise.
      </p>
    </div>
  );
}

export default About;
