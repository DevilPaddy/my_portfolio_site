import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectDetail from './components/ProjectDetail';
import About from './pages/About';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import AboutIdea from './pages/AboutIdea';
import './App.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const isHomeRoute = location.pathname === '/';

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

    if (isDesktop && isHomeRoute) {
      navigate('/about', { replace: true });
    }
  }, [isDesktop, isHomeRoute, navigate]);

  return (
    <div className="bg-black min-h-screen ">
      <NavBar />

      {/* Different layout for mobile and desktop */}
      {isDesktop ? (
        // Desktop View: Flex layout with Notes sidebar
        <div className="flex w-full min-h-screen">
          <div>
            <Notes />
          </div>

          <div className="flex-grow border-l-[1px] border-l-[#303030] pl-3">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-idea" element={<AboutIdea />} />
            </Routes>
          </div>
        </div>
      ) : (
        // Mobile/Tablet View
        <div className="w-full px-4 min-h-screen">
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-idea" element={<AboutIdea />} />
          </Routes>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
