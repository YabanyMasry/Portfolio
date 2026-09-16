import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import DirectoryPage from './pages/DirectoryPage';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import TransitionTestPage from './pages/TransitionTestPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/transition-test" element={<TransitionTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
