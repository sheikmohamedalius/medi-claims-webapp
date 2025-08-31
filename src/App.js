import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ClaimsListPage from './pages/ClaimsListPage';
import Logout from './pages/Logout';

function AppWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <Menu />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/claims" element={<ClaimsListPage />} />
        <Route path="/logout" element={<Logout />} />
        {/* Add more routes as needed */}
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;