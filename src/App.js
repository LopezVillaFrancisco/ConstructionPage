import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PropertiesPage from './components/PropertiesPage';
import PropertyDetail from './components/PropertyDetail';
import Navbar from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import ConstructionManagementPage from './components/ConstructionMan'; 
import BuildingDesignPage from './components/BuildingDesign'; 
import QualityAssurancePage from './components/QualityAssurance';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PropertiesPage />} />
        <Route path="/portfolio/:id" element={<PropertyDetail />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/construction-management" element={<ConstructionManagementPage />} /> 
        <Route path="/services/building-design" element={<BuildingDesignPage />} /> 
        <Route path="/services/quality-assurance" element={<QualityAssurancePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
