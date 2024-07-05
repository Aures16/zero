import React from 'react';
//import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Footer = () => {


  return (
    <>
    <footer className="bg-zinc-800 text-zinc-400 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm">
            &copy; CreditSmart Africa 2024
            <a href="https" className="ml-4 text-zinc-400 hover:underline">Privacy policy</a>
            <a href="https" className="ml-4 text-zinc-400 hover:underline">Terms & Conditions</a>
          </div>
          <div className="flex space-x-4">
            <a href="j" className="text-zinc-400 hover:text-white"><img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></a>
            <a href="https" className="text-zinc-400 hover:text-white"><img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/></a>
            <a href="https" className="text-zinc-400 hover:text-white"><img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/gmail.png" alt="gmail"/></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
