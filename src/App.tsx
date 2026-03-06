import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import SecureProjectDetails from './components/SecureProjectDetails';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/secure-details" element={<SecureProjectDetails />} />
        </Routes>
      </main>

      <footer className="px-[10px] py-12 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-xs opacity-40 uppercase tracking-widest">
          © 2026 Finding Form
        </div>
        <div className="flex gap-8 text-xs font-medium tracking-widest uppercase">
          <a href="https://www.instagram.com/findingform.design?igsh=MXJoZGI0eXlwanI2cg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

