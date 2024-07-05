import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Navbar from './Navbar';
import './index.css';
//import Header from './header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './login';
//import Footer from './Footer';
import Dashboard from './Dashboard';
import NewRequest from './NewRequest';
import RegisterEmprunteur from './RegisterEmprunteur';
import Register from './Register';
import DashboardAnalyste from './DashboardAnalyste';
// Ajouter cette ligne pour charger les styles de Tailwind CSS
import 'tailwindcss/tailwind.css';

function App() {
  return (
    // <div className="min-h-screen bg-gray-100">
    //   <Header/>
    //    <Login/>
    //   <Footer/>
    //   </div>
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/client" element={<Dashboard />} />
          <Route path="/Analyste" element={<DashboardAnalyste />} />
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/AnalysteLogin" element={<Register />} />
          <Route path="/signup" element={<RegisterEmprunteur />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

