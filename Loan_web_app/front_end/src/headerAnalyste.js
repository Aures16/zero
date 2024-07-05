import React from 'react';
//import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logoImage from './img/logo.jpg';

function HeaderAnalyste() {


  return (
    <>
    <header className="bg-white shadow p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img src={logoImage} alt="Logo" className="h-10" />
                <span className="text-xl font-bold">CREDIT SMART</span>
              </div>
            </div>
            <p className="text-xl font-bold">Welcome Risk Analyste</p>
          </header>
    </>
  );
};

export default HeaderAnalyste;
