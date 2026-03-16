import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../types';

type Tab = 'brochure' | 'masterplan' | 'floorplan';

export default function SecureProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const defaultTab: Tab = project?.details?.hideBrochure ? (project?.details?.hideMasterPlan ? 'floorplan' : 'masterplan') : 'brochure';
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  const tabs: { key: Tab; label: string }[] = [
    ...(!project.details?.hideBrochure ? [{ key: 'brochure' as Tab, label: 'Brochure' }] : []),
    ...(!project.details?.hideMasterPlan ? [{ key: 'masterplan' as Tab, label: project.details?.masterPlanLabel ?? 'Master Plan' }] : []),
    ...(!project.details?.hideFloorPlan ? [{ key: 'floorplan' as Tab, label: 'Floor Plan' }] : []),
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
          <div className="w-full py-8">
            {project.details?.brochureUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Label row */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs font-mono opacity-30 shrink-0">01</span>
                  <div className="h-px flex-1 bg-ink/10" />
                  <span className="text-xs uppercase tracking-widest opacity-60 shrink-0">Brochure</span>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-line"
                  style={{ height: '80vh', overflow: 'hidden' }}
                >
                  <iframe
                    src={project.details.brochureUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={`${project.title} Brochure`}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <ComingSoon label="Brochure" />
            )}
          </div>
        )}

        {/* Master Plan */}
        {activeTab === 'masterplan' && (
          <div className="w-full">
            {project.details?.masterPlanUrl ? (
              <div className="-mx-[10px] bg-white" style={{ height: '90vh' }}>
                <iframe
                  src={project.details.masterPlanUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={`${project.title} Master Plan`}
                />
              </div>
            ) : project.details?.masterPlanImages && project.details.masterPlanImages.length > 0 ? (
              <div className="flex flex-col gap-24">
                {project.details.masterPlanImages.map((item, i) => {
                  const url = typeof item === 'string' ? item : item.url;
                  const crop = typeof item === 'string' ? null : item.crop;
                  const label = project.details?.masterPlanLabel ?? 'Master Plan';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Label row */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-xs font-mono opacity-30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <div className="h-px flex-1 bg-ink/10" />
                        <span className="text-xs uppercase tracking-widest opacity-60 shrink-0">{label}</span>
                      </div>

                      {/* Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-line"
                        style={{ overflow: 'hidden', padding: '2.5rem' }}
                      >
                        <motion.img
                          src={url}
                          alt={`${project.title} ${label} ${i + 1}`}
                          referrerPolicy="no-referrer"
                          initial={{ scale: 1.03 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{ position: 'relative', zIndex: 1, width: crop?.scale ?? '100%', marginLeft: crop?.marginLeft ?? '0', marginTop: crop?.marginTop ?? '0', marginBottom: crop?.marginBottom ?? '0', display: 'block', imageRendering: 'high-quality', filter: 'contrast(1.25) saturate(1.15) brightness(1.02)' }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <ComingSoon label="Master Plan" />
            )}
          </div>
        )}

        {/* Floor Plan */}
        {activeTab === 'floorplan' && (
          <div className="w-full py-8">
            {project.details?.floorPlanUrl ? (
              <div className="w-full" style={{ height: '80vh' }}>
                <embed
                  src={project.details.floorPlanUrl}
                  type="application/pdf"
                  className="w-full h-full border-0"
                />
              </div>
            ) : project.details?.floorPlanImages && project.details.floorPlanImages.length > 0 ? (
              <div className="flex flex-col gap-24">
                {project.details.floorPlanImages.map((item, i) => {
                  const url = typeof item === 'string' ? item : item.url;
                  const crop = typeof item === 'string' ? null : item.crop;
                  const title = typeof item === 'string' ? null : (item as { title?: string }).title;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Label row */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-xs font-mono opacity-30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <div className="h-px flex-1 bg-ink/10" />
                        {title && <span className="text-xs uppercase tracking-widest opacity-60 shrink-0">{title}</span>}
                      </div>

                      {/* Card with ghost number inside */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-line"
                        style={{ overflow: 'hidden', padding: '2.5rem' }}
                      >
                        <motion.img
                          src={url}
                          alt={title ?? `${project.title} Floor Plan ${i + 1}`}
                          referrerPolicy="no-referrer"
                          initial={{ scale: 1.03 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{ position: 'relative', zIndex: 1, width: crop?.scale ?? '100%', marginLeft: crop?.marginLeft ?? '0', marginTop: crop?.marginTop ?? '0', marginBottom: crop?.marginBottom ?? '0', display: 'block', imageRendering: 'high-quality', filter: 'contrast(1.25) saturate(1.15) brightness(1.02)' }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
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
