import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../types';

export default function SecureProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-[10px] py-12 min-h-[70vh]">
      <Link to={`/project/${project.id}`} className="inline-block mb-12 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
        ← Back to {project.title}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <div className="text-sm font-mono opacity-50 mb-4">SECURE ACCESS GRANTED</div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">{project.title} Details</h1>
        <p className="text-lg md:text-xl font-serif italic opacity-60">Confidential Project Information</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border border-dashed border-ink/20 p-12 md:p-24 flex flex-col items-center justify-center text-center gap-4 bg-black/5 origin-top"
      >
        <h2 className="text-2xl font-serif italic">More details coming soon...</h2>
        <p className="opacity-60 max-w-md mx-auto">
          This is a secure page. You have successfully verified your identity to view the confidential details of this project.
        </p>
      </motion.div>
    </div>
  );
}
