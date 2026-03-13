import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="flex justify-between items-center px-[10px] py-4 border-b border-line sticky top-0 bg-bg/90 backdrop-blur-md z-50">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link to="/" onClick={handleNavClick}>
            <img
              src="https://i.postimg.cc/qqr3xgSC/Trubuild-Logo-(2).png"
              alt="Trubuild Logo"
              className="h-8 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <NavLink to="/" className={({ isActive }) => `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`}>Works</NavLink>
          <NavLink to="/about" className={({ isActive }) => `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`}>Contact</NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-px bg-ink origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-px bg-ink origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 bg-bg/95 backdrop-blur-md border-b border-line flex flex-col px-[10px] py-8 gap-8"
          >
            <NavLink
              to="/"
              onClick={handleNavClick}
              className={({ isActive }) => `text-2xl tracking-widest uppercase font-light transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}
            >
              Works
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleNavClick}
              className={({ isActive }) => `text-2xl tracking-widest uppercase font-light transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className={({ isActive }) => `text-2xl tracking-widest uppercase font-light transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}
            >
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
