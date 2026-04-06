'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) navbar?.classList.add('nav-blur');
      else navbar?.classList.remove('nav-blur');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-3xl font-bold font-display">
            <span className="text-primary">T</span><span className="text-dark">A</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-dark hover:text-primary transition-colors font-medium">Home</Link>
            <Link href="#about" className="text-dark hover:text-primary transition-colors font-medium">About</Link>
            <Link href="#skills" className="text-dark hover:text-primary transition-colors font-medium">Skills</Link>
            <Link href="#projects" className="text-dark hover:text-primary transition-colors font-medium">Projects</Link>
            <Link href="#contact" className="btn-primary px-6 py-3 rounded-full text-white font-semibold">Contact</Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-dark focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-6 bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              {['home','about','skills','projects','contact'].map(s => (
                <Link key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}
                  className="text-dark hover:text-primary transition-colors font-medium py-2 capitalize">
                  {s}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
