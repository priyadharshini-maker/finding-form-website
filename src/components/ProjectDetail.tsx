import { useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../types';

// Reusable scroll-driven overlay for gallery images on mobile
function GalleryImageCard({
  imgUrl,
  caption,
  objectPosition,
  altText,
}: {
  imgUrl: string;
  caption: string;
  objectPosition: string;
  altText: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const overlayY = useTransform(scrollYProgress, [0.10, 0.30, 0.62, 0.82], ['60%', '0%', '0%', '-60%']);
  const overlayOpacity = useTransform(scrollYProgress, [0.10, 0.28, 0.62, 0.80], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} style={{ height: '230vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-bg pt-[8px]">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 80 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full overflow-hidden shadow-2xl relative group cursor-pointer origin-top"
        >
          <img
            src={imgUrl}
            alt={altText}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            style={{ objectPosition }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 project-image"
          />

          {/* Desktop: hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center">
            <span className="text-bg font-medium tracking-widest uppercase text-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {caption}
            </span>
          </div>

          {/* Mobile: scroll-driven overlay */}
          <motion.div
            className="absolute inset-0 md:hidden bg-black/30 flex flex-col items-center justify-center gap-3 px-8 text-center"
            style={{ y: overlayY, opacity: overlayOpacity }}
          >
            <span className="text-bg font-medium tracking-widest uppercase text-xl">
              {caption}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero image parallax
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageBlur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(12px)']);

  // Hero mobile overlay
  const heroOverlayY = useTransform(scrollYProgress, [0.10, 0.30, 0.62, 0.82], ['60%', '0%', '0%', '-60%']);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0.10, 0.28, 0.62, 0.80], [0, 1, 1, 0]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl font-light">Project not found</h2>
        <Link to="/" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-[10px] py-12 relative">
      <Link to="/" className="inline-block mb-12 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
        ← Back to Works
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <div className="text-sm font-mono opacity-50 mb-4">{project.number}</div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">{project.title}</h1>
        <p className="text-lg md:text-xl font-serif italic opacity-60">{project.category}</p>
      </motion.div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[150vh] mb-24 w-full">
        <div className="sticky top-32 w-full flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 8rem)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-bg overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <motion.div style={{ scale: imageScale, filter: imageBlur, opacity: imageOpacity }} className="w-full h-full origin-center">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 project-image"
              />
            </motion.div>

            {/* Desktop: hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-6 text-center max-w-3xl">
                <span className="text-bg font-medium tracking-widest uppercase text-4xl mb-4">
                  {project.title}
                </span>
                {project.description && (
                  <p className="text-bg/80 text-base mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}/secure-details`); }}
                  className="bg-bg text-ink px-8 py-4 text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-opacity shadow-2xl whitespace-nowrap"
                >
                  View Project Details
                </button>
              </div>
            </div>

            {/* Mobile: scroll-driven overlay */}
            <motion.div
              className="absolute inset-0 md:hidden bg-black/30 flex flex-col items-center justify-center gap-4 px-8 text-center"
              style={{ y: heroOverlayY, opacity: heroOverlayOpacity }}
            >
              <span className="text-bg font-medium tracking-widest uppercase text-xl">
                {project.title}
              </span>
              {project.description && (
                <p className="text-bg/70 text-sm leading-relaxed max-w-xs">
                  {project.description}
                </p>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}/secure-details`); }}
                className="mt-2 border border-bg text-bg text-xs tracking-widest uppercase px-5 py-2.5"
              >
                View Project Details
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Galleries */}
      {project.galleries && project.galleries.length > 0 && (
        <div className="flex flex-col gap-16 relative z-20 bg-bg">
          {project.galleries.map((gallery, gIndex) => (
            <div key={gIndex} className="flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-serif italic border-b border-line pb-4 bg-bg relative z-30"
              >
                {gallery.name}
              </motion.h2>
              <div className="relative">
                <div className="relative pb-24">
                  <div className="flex flex-col">
                    {gallery.images.map((img, iIndex) => {
                      const imgUrl = typeof img === 'string' ? img : img.url;
                      const caption = typeof img === 'string' ? `${gallery.name} Image ${iIndex + 1}` : img.caption;
                      const objectPosition = typeof img === 'string' ? 'center' : (img.objectPosition ?? 'center');

                      return (
                        <div key={iIndex}>
                          <GalleryImageCard
                            imgUrl={imgUrl}
                            caption={caption}
                            objectPosition={objectPosition}
                            altText={`${project.title} - ${caption}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
