import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import EventDetails from './pages/EventDetails';
import TeamDetails from './pages/TeamDetails';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
      </AnimatePresence>
      <footer className="py-12 relative z-10 glass mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold font-heading mb-2">IC Club</h4>
            <p className="text-muted-foreground text-sm max-w-xs">Fostering innovation and creativity for the next generation.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right text-muted-foreground text-xs">
            <p>&copy; 2026 IC Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
