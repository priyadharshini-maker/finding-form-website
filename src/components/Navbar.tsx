import { motion } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-[10px] py-4 border-b border-line sticky top-0 bg-bg/90 backdrop-blur-md z-50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center"
      >
        <Link to="/">
          <img 
            src="https://i.postimg.cc/qqr3xgSC/Trubuild-Logo-(2).png" 
            alt="Trubuild Logo" 
            className="h-8 md:h-12 object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
      </motion.div>
      <div className="flex gap-8 text-xs tracking-widest uppercase">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`
          }
        >
          Works
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `transition-opacity ${isActive ? 'font-bold opacity-100' : 'font-medium opacity-50 hover:opacity-100'}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
