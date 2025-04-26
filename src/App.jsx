import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectDetail from './components/ProjectDetail';
import About from './pages/About';
import Notes from './components/Notes';
import Footer from './components/Footer'
import Contact from './pages/Contact';
import './App.css';
import AboutIdea from './pages/AboutIdea';

const App = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop && isHomeRoute) {
      navigate('/about', { replace: true });
    }
  }, [isDesktop, isHomeRoute, navigate]);

  return (
    <div className="bg-black h-full">
      <NavBar />
      <div className="flex w-full">
        {(isDesktop || (!isDesktop && isHomeRoute)) && <Notes /> }
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={isDesktop ? <Navigate to="/about" replace /> : <Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-idea' element={<AboutIdea />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
