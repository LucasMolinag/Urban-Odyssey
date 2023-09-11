// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ContactUsPage from './views/ContactUsPage';
import UserDetailsPage from './views/UserDetailsPage';
import SignUp from './views/SignUp';
import Login from './views/Login';
import AdventurePage from './components/AdventurePage';
import { UserLocationProvider } from './providers/UserLocationContext';
import ResponsiveAppBar from './components/AppBar';
import { AdventureProvider } from "./providers/AdventureProvider";
import { LocationsProvider } from "./providers/LocationsProvider";



function App() {
  return (
  <UserLocationProvider>
    <AdventureProvider>
      <LocationsProvider>
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserDetailsPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/adventure/:id" element={<AdventurePage />} />
          </Routes>
        </Router>
      </LocationsProvider>
    </AdventureProvider>
   </UserLocationProvider>

  );
}

export default App;
