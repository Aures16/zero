import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import loginImage from './img/login.jpeg';
import logoImage from './img/logo.jpg';
import Header from './header';
import Footer from './Footer';
import axios from './axios';
// import 'tailwindcss/tailwind.css'; // Assurez-vous que Tailwind CSS est configuré

const Login = () => {
  let email;
  let password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login_emprunteur', { email, password });
      console.log(response.data);
      alert('Connexion réussie');
    } catch (error) {
      console.error('Erreur de connexion', error);
      alert('Échec de la connexion, vérifiez vos identifiants');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
     <Header />
      <form
        onSubmit={handleSubmit}
        className="flex-grow flex items-center justify-center bg-zinc-100"
        style={{
          // backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          <div
            className="w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${logoImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="p-8 text-blue">
              <h1 className="text-3xl font-bold">WELCOME TO YOUR LOAN APP</h1>
              <p className="mt-2">Sign in to get started</p>
            </div>
          </div>
          <div className="w-1/2 p-8">
            <button className="w-full bg-white border border-zinc-300 text-zinc-700 py-2 px-4 rounded-lg flex items-center justify-center mb-4">
               You need money !!!
            </button>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-zinc-300" />
              <span className="mx-4 text-zinc-500"> And </span>
              <hr className="flex-grow border-t border-zinc-300" />
            </div> */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="hht" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
                Sign in
              </button>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              If you are having trouble logging in, please contact{' '}
              <a href="mailto:j609727@gmail.com" className="text-blue-500" style={{ color: 'blue', textDecorationLine: 'none' }}>
                creditsmart@service.com
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              You do not have an account?{' '}
              <Link to="/signup" className="text-blue-500" style={{ color: 'blue', textDecorationLine: 'none' }}>
                Create my account
              </Link>
            </p>
          </div>
        </div>
      </form>
    <Footer />
    </div>
  );
};

export default Login;
