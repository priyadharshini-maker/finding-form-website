import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../types';

type Tab = 'brochure' | 'masterplan' | 'floorplan';

export default function SecureProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<Tab>('brochure');

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'brochure', label: 'Brochure' },
    { key: 'masterplan', label: 'Master Plan' },
    { key: 'floorplan', label: 'Floor Plan' },
  ];

  return (
    <div className="w-full px-[10px] py-12 min-h-[70vh]">
      <Link
        to={`/project/${project.id}`}
        className="inline-block mb-12 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
      >
        ← Back to {project.title}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <div className="text-sm font-mono opacity-50 mb-4">{project.number}</div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg md:text-xl font-serif italic opacity-60">Project Details</p>
      </motion.div>

      {/* Tab Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex border-b border-line mb-12 gap-8"
      >
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-4 text-xs uppercase tracking-widest transition-all ${
              activeTab === tab.key
                ? 'border-b-2 border-ink font-bold opacity-100'
                : 'opacity-40 hover:opacity-70'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brochure */}
        {activeTab === 'brochure' && (
          <div className="w-full">
            {project.details?.brochureUrl ? (
              <div className="w-full" style={{ height: '80vh' }}>
                <iframe
                  src={project.details.brochureUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${project.title} Brochure`}
                />
              </div>
            ) : (
              <ComingSoon label="Brochure" />
            )}
          </div>
        )}

        {/* Master Plan */}
        {activeTab === 'masterplan' && (
          <div className="w-full">
            {project.details?.masterPlanUrl ? (
              <div className="-mx-[10px]" style={{ height: '90vh' }}>
                <iframe
                  src={project.details.masterPlanUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${project.title} Master Plan`}
                />
              </div>
            ) : project.details?.masterPlanImages && project.details.masterPlanImages.length > 0 ? (
              <div className="flex flex-col gap-8">
                {project.details.masterPlanImages.map((url, i) => (
                  <img key={i} src={url} alt={`${project.title} Master Plan ${i + 1}`} referrerPolicy="no-referrer" className="w-full object-contain" />
                ))}
              </div>
            ) : (
              <ComingSoon label="Master Plan" />
            )}
          </div>
        )}

        {/* Floor Plan */}
        {activeTab === 'floorplan' && (
          <div className="w-full">
            {project.details?.floorPlanUrl ? (
              <div className="w-full" style={{ height: '80vh' }}>
                <iframe
                  src={project.details.floorPlanUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${project.title} Floor Plan`}
                />
              </div>
            ) : project.details?.floorPlanImages && project.details.floorPlanImages.length > 0 ? (
              <div className="flex flex-col gap-8">
                {project.details.floorPlanImages.map((url, i) => (
                  <img key={i} src={url} alt={`${project.title} Floor Plan ${i + 1}`} referrerPolicy="no-referrer" className="w-full object-contain" />
                ))}
              </div>
            ) : (
              <ComingSoon label="Floor Plan" />
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="border border-dashed border-ink/20 p-12 md:p-24 flex flex-col items-center justify-center text-center gap-4">
      <h2 className="text-2xl font-serif italic">{label} coming soon</h2>
      <p className="opacity-40 text-sm max-w-sm">This section will be updated shortly.</p>
    </div>
  );
}
