import axios from 'axios';

// Créer une instance d'Axios avec des configurations par défaut
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // URL de base de votre API backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor pour les requêtes
axiosInstance.interceptors.request.use(
  config => {
    // Vous pouvez ajouter des configurations supplémentaires ici, par exemple un token d'authentification
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Interceptor pour les réponses
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Gérer les erreurs ici
    return Promise.reject(error);
  }
);

export default axiosInstance;
