'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/project';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ProjectModal from '@/components/modal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState('preview');

  useEffect(() => {
    // Reveal Sections
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    reveals.forEach(r => observer.observe(r));

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    return () => reveals.forEach(r => observer.unobserve(r));
  }, []);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && selectedProject) closeProjectModal(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  const openProjectModal = (project) => { setSelectedProject(project); setZoomLevel(1); setActiveTab('preview'); };
  const closeProjectModal = () => { setSelectedProject(null); setZoomLevel(1); setActiveTab('preview'); };
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        h1,h2,h3,h4,h5,h6 { font-family: 'Sora', sans-serif; }
        @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-20px) rotate(5deg)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(50px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        .animate-float{animation:float 6s ease-in-out infinite}
        .animate-slideUp{animation:slideUp 0.8s ease-out forwards}
        .animate-fadeIn{animation:fadeIn 0.8s ease-out forwards}
        .animate-scaleIn{animation:scaleIn 0.6s ease-out forwards}
        .gradient-text{background:linear-gradient(135deg,#FF6B6B 0%,#4ECDC4 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .card-hover{transition:all 0.4s cubic-bezier(0.4,0,0.2,1)}
        .card-hover:hover{transform:translateY(-12px) scale(1.02);box-shadow:0 20px 60px rgba(255,107,107,0.2)}
        .blob{border-radius:30% 70% 70% 30%/30% 30% 70% 70%;background:linear-gradient(135deg,rgba(255,107,107,0.1) 0%,rgba(78,205,196,0.1) 100%)}
        .blob-2{border-radius:70% 30% 30% 70%/70% 70% 30% 30%;background:linear-gradient(135deg,rgba(78,205,196,0.1) 0%,rgba(255,230,109,0.1) 100%)}
        ::-webkit-scrollbar{width:10px} ::-webkit-scrollbar-track{background:#f1f1f1} ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#FF6B6B 0%,#4ECDC4 100%);border-radius:10px}
        .reveal{opacity:0;transform:translateY(30px);transition:all 0.8s ease-out} .reveal.active{opacity:1;transform:translateY(0)}
        .nav-blur{background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);box-shadow:0 4px 30px rgba(0,0,0,0.05)}
        .project-card{position:relative;overflow:hidden;transition:all 0.4s cubic-bezier(0.4,0,0.2,1);cursor:pointer}
        .project-card:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 20px 60px rgba(255,107,107,0.3)}
        .project-content{position:relative;z-index:10}
        .project-image{width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease}
        .project-card:hover .project-image{transform:scale(1.05)}
        .project-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(255,107,107,0.9) 0%,rgba(78,205,196,0.9) 100%);opacity:0;transition:opacity 0.4s ease;display:flex;align-items:center;justify-content:center;z-index:5}
        .project-card:hover .project-overlay{opacity:1}
        .zoom-text{color:white;font-size:1.25rem;font-weight:700;text-shadow:0 2px 10px rgba(0,0,0,0.3)}
        .btn-primary{background:linear-gradient(135deg,#FF6B6B 0%,#FF8E8E 100%);box-shadow:0 4px 15px rgba(255,107,107,0.3);transition:all 0.3s ease}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 25px rgba(255,107,107,0.4)}
        .btn-secondary{background:linear-gradient(135deg,#4ECDC4 0%,#6FE5DD 100%);box-shadow:0 4px 15px rgba(78,205,196,0.3);transition:all 0.3s ease}
        .btn-secondary:hover{transform:translateY(-2px);box-shadow:0 6px 25px rgba(78,205,196,0.4)}
        .bg-light{background-color:#F8F9FA} .text-dark{color:#1A1A2E} .text-primary{color:#FF6B6B} .text-secondary{color:#4ECDC4} .text-accent{color:#FFE66D}
        .bg-dark{background-color:#1A1A2E} .bg-primary{background-color:#FF6B6B} .bg-secondary{background-color:#4ECDC4} .bg-accent{background-color:#FFE66D}
        .image-modal{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease-out}
        .modal-content{position:relative;max-width:95vw;max-height:95vh;overflow:auto}
        .modal-image-container{transition:transform 0.3s ease}
        .zoom-controls{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;gap:1rem;align-items:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);padding:1rem 1.5rem;border-radius:50px;z-index:10000}
        .zoom-btn{background:white;border:none;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;font-size:1.25rem;font-weight:bold;color:#1A1A2E}
        .zoom-btn:hover{transform:scale(1.1);background:#FF6B6B;color:white}
        .close-btn{position:fixed;top:2rem;right:2rem;background:white;border:none;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;z-index:10000}
        .close-btn:hover{transform:scale(1.1) rotate(90deg);background:#FF6B6B;color:white}
        .zoom-level-text{color:white;font-weight:600;min-width:60px;text-align:center}
        .modal-tabs{position:fixed;top:2rem;left:50%;transform:translateX(-50%);display:flex;gap:0.5rem;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);padding:0.5rem;border-radius:50px;z-index:10000}
        .modal-tab{background:rgba(255,255,255,0.2);border:none;padding:0.75rem 1.5rem;border-radius:50px;color:white;font-weight:600;cursor:pointer;transition:all 0.2s ease}
        .modal-tab:hover{background:rgba(255,255,255,0.3)} .modal-tab.active{background:white;color:#1A1A2E}
        .modal-content-wrapper{max-width:95vw;max-height:85vh;overflow:auto;background:white;border-radius:20px;padding:2rem}
        .code-container{background:#1e1e1e;color:#d4d4d4;padding:1.5rem;border-radius:10px;overflow-x:auto;font-family:'Courier New',monospace;font-size:0.9rem;line-height:1.6}
        .output-container{width:100%;height:70vh;border:none;border-radius:10px}
      `}</style>

      <div className="bg-light text-dark overflow-x-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 -left-40 w-96 h-96 blob animate-float"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 blob-2 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects openProjectModal={openProjectModal} />
        <Education />
        <Certifications />
        <Contact />
        <Footer />

        <ProjectModal
          selectedProject={selectedProject}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          zoomLevel={zoomLevel}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          closeProjectModal={closeProjectModal}
        />
      </div>
    </>
  );
}
