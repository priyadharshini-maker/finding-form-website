import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../types';

export default function ProjectList() {
  return (
    <div className="w-full bg-bg">
      <div className="relative pb-24">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-0 w-full h-[100vh] flex items-center justify-center bg-bg overflow-hidden pt-[8px]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mx-[10px] w-full h-full flex justify-center bg-black/5 overflow-hidden shadow-2xl relative group cursor-pointer origin-top"
              >
                <Link to={`/project/${project.id}`} className="block w-full h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 px-8">
                    <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                      <div className="text-bg/60 font-mono text-sm tracking-widest uppercase">{project.number}</div>
                      <h3 className="text-bg font-medium tracking-widest uppercase text-xl md:text-3xl">{project.title}</h3>
                      <p className="text-bg/80 font-serif italic text-base md:text-xl">{project.category}</p>
                      {project.description && (
                        <p className="text-bg/70 text-sm md:text-base max-w-xl text-center leading-relaxed mt-1">{project.description}</p>
                      )}
                      <span className="mt-4 inline-block border border-bg text-bg text-xs md:text-sm tracking-widest uppercase px-6 py-3 hover:bg-bg hover:text-ink transition-colors duration-300">
                        View Gallery
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


