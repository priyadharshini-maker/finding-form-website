import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../types';

type ProjectCardProps = { project: Project };

function ProjectCard({ project }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Mobile: description slides up from bottom, stays, then exits upward
  const descY = useTransform(scrollYProgress, [0.10, 0.30, 0.62, 0.82], ['60%', '0%', '0%', '-60%']);
  const descOpacity = useTransform(scrollYProgress, [0.10, 0.28, 0.62, 0.80], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} style={{ height: '230vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-bg pt-[8px]">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 80 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-[10px] w-[calc(100%-20px)] h-full overflow-hidden shadow-2xl relative group cursor-pointer origin-top"
        >
          <Link to={`/project/${project.id}`} className="block w-full h-full">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 project-image"
            />

            {/* Desktop: hover overlay */}
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex flex-col items-center justify-center gap-4 px-8">
              <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                <div className="text-bg/60 font-mono text-sm tracking-widest uppercase">
                  {project.number}
                </div>
                <h3 className="text-bg font-medium tracking-widest uppercase text-3xl">
                  {project.title}
                </h3>
                <p className="text-bg/80 font-serif italic text-xl">
                  {project.category}
                </p>
                {project.description && (
                  <p className="text-bg/70 text-base max-w-xl text-center leading-relaxed mt-1">
                    {project.description}
                  </p>
                )}
                <span className="mt-4 inline-block border border-bg text-bg text-sm tracking-widest uppercase px-6 py-3 hover:bg-bg hover:text-ink transition-colors duration-300">
                  View Gallery
                </span>
              </div>
            </div>

            {/* Mobile: scroll-driven overlay covers full image, content centred */}
            <motion.div
              className="absolute inset-0 md:hidden bg-black/30 flex flex-col items-center justify-center gap-4 px-8 text-center"
              style={{ y: descY, opacity: descOpacity }}
            >
              <div className="text-bg/60 font-mono text-xs tracking-widest uppercase">
                {project.number}
              </div>
              <h3 className="text-bg font-medium tracking-widest uppercase text-xl">
                {project.title}
              </h3>
              <p className="text-bg/80 font-serif italic text-base">
                {project.category}
              </p>
              {project.description && (
                <p className="text-bg/70 text-sm leading-relaxed max-w-xs">
                  {project.description}
                </p>
              )}
              <span className="mt-2 inline-block border border-bg text-bg text-xs tracking-widest uppercase px-5 py-2.5">
                View Gallery
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectList() {
  return (
    <div className="w-full bg-bg">
      <div className="relative pb-24">
        <div className="flex flex-col">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
