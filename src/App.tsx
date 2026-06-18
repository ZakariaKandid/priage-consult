import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ForHospitalPage } from './pages/ForHospitalPage';
import { ForPatientPage } from './pages/ForPatientPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onBookDemo={() => setDemoOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onBookDemo={() => setDemoOpen(true)} />} />
          <Route path="/for-hospitals" element={<ForHospitalPage onBookDemo={() => setDemoOpen(true)} />} />
          <Route path="/for-patients" element={<ForPatientPage onBookDemo={() => setDemoOpen(true)} />} />
          <Route path="/about" element={<AboutPage onBookDemo={() => setDemoOpen(true)} />} />
        </Routes>
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
