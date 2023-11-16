import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Login from './Component/Auth/Login.jsx';
import Register from './Component/Auth/Register.jsx';
import ProtectedRoute from './Component/Auth/ProtectedRoute.jsx';
import Home from './Component/User/Home.jsx';

const routes = [
  { path: '/', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/protected', element: <ProtectedRoute /> },
  { path: '/home', element: <Home /> },
];

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);