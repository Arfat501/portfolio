'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 240;
const FRAME_PATH = '/frames/ezgif-frame-';

// Text overlays configuration
const textOverlays = [
  { start: 0, end: 0.2, text: 'Time is always running.' },
  { start: 0.25, end: 0.45, text: 'Most of it goes unnoticed.' },
  { start: 0.5, end: 0.7, text: 'Systems make it visible.' },
  { start: 0.8, end: 1, text: 'Automation gives it purpose.' },
];

export default function AutomationScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `${FRAME_PATH}${frameNumber}.jpg`;

        img.onload = () => {
          loadedCount++;
          setLoadProgress((loadedCount / TOTAL_FRAMES) * 100);

          if (loadedCount === TOTAL_FRAMES) {
            imagesRef.current = images;
            setIsLoading(false);
            // Draw first frame
            drawFrame(0);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load frame ${frameNumber}`);
          loadedCount++;
          setLoadProgress((loadedCount / TOTAL_FRAMES) * 100);
        };

        images[i - 1] = img;
      }
    };

    preloadImages();
  }, []);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[frameIndex];

    if (!canvas || !ctx || !img) return;

    // Set canvas size to match container
    const container = canvas.parentElement;
    if (container) {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      // Set actual canvas resolution (physical pixels)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Set display size (CSS pixels)
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Scale context to match DPR so we can draw at logical pixel coordinates
      ctx.scale(dpr, dpr);

      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    // Clear canvas (using logical dimensions since context is scaled)
    const logicalWidth = canvas.width / (window.devicePixelRatio || 1);
    const logicalHeight = canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);

    // Calculate dimensions for contain fit (using logical dimensions)
    const imgAspect = img.width / img.height;
    const canvasAspect = logicalWidth / logicalHeight;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgAspect > canvasAspect) {
      // Image is wider - fit to width
      drawWidth = logicalWidth;
      drawHeight = drawWidth / imgAspect;
      drawX = 0;
      drawY = (logicalHeight - drawHeight) / 2;
    } else {
      // Image is taller - fit to height
      drawHeight = logicalHeight;
      drawWidth = drawHeight * imgAspect;
      drawX = (logicalWidth - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Update frame on scroll
  useEffect(() => {
    if (isLoading) return;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      drawFrame(frameIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, isLoading, drawFrame]);

  // Handle resize
  useEffect(() => {
    if (isLoading) return;

    const handleResize = () => {
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      drawFrame(frameIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollYProgress, isLoading, drawFrame]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Sticky canvas container */}
      <div className="canvas-container">
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#000000]">
            <div className="relative">
              {/* Glowing orb */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse-glow" />
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse-glow" />
            </div>
            <div className="mt-8 text-white/60 text-sm tracking-widest uppercase">
              Loading
            </div>
            <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="mt-2 text-white/40 text-xs">
              {Math.round(loadProgress)}%
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
            }`}
        />

        {/* Text overlays */}
        {!isLoading && textOverlays.map((overlay, index) => (
          <TextOverlay
            key={index}
            text={overlay.text}
            start={overlay.start}
            end={overlay.end}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

// Text overlay component with scroll-based opacity
interface TextOverlayProps {
  text: string;
  start: number;
  end: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function TextOverlay({ text, start, end, scrollProgress }: TextOverlayProps) {
  const midPoint = start + (end - start) / 2;

  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.05, midPoint, end - 0.05, end],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [start, midPoint, end],
    [30, 0, -30]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      style={{ opacity, y }}
    >
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-heading glow-purple tracking-tight px-4">
        {text}
      </h2>
    </motion.div>
  );
}
