import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './src/Header';
import Footer from './src/Footer';
import HomePage from './src/HomePage';
import AboutPage from './src/AboutPage';
import SymptomsPage from './src/SymptomsPage';
import StatsPage from './src/StatsDisplay';
import RessourcesUtiles from './src/Resources';
import PreventionPage from './src/PreventionPage';
import CommentsPage from './src/CommentsPage';
import DocumentsPage from './src/DocumentsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/symptomes" element={<SymptomsPage />} />
            <Route path="/statistiques" element={<StatsPage />} />
            <Route path="/ressources" element={<RessourcesUtiles />} />
            <Route path="/prevention" element={<PreventionPage />} />
            <Route path="/commentaires" element={<CommentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
