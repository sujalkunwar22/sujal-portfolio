'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative min-h-screen w-full', className)}
  >
    <div
      data-flow-inner
      className={cx(
        'flow-art-container relative flex min-h-screen w-full flex-col justify-start gap-12 px-[6vw] pt-40 pb-32',
        'backdrop-blur-[2px] bg-black/5',
        'will-change-transform',
      )}
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      ScrollTrigger.getAll().forEach(t => t.kill());

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-flow-section]'),
      );
      if (sections.length === 0) return;

      sections.forEach((section, i) => {
        const inner = section.querySelector<HTMLElement>('.flow-art-container');
        if (!inner) return;

        gsap.set(inner, { 
          clearProps: 'all',
          opacity: i === 0 ? 1 : 0,
          visibility: i === 0 ? 'visible' : 'hidden',
          willChange: 'opacity, transform',
        });

        // Determine if content is taller than viewport
        const contentHeight = inner.scrollHeight;
        const windowHeight = window.innerHeight;
        const isTall = contentHeight > windowHeight;
        const scrollDistance = isTall ? (contentHeight - windowHeight + 200) : 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(windowHeight, scrollDistance) + 500}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          }
        });

        if (i > 0) {
          tl.fromTo(inner, 
            { opacity: 0, y: 50, scale: 0.98, visibility: 'hidden' },
            { opacity: 1, y: 0, scale: 1, visibility: 'visible', duration: 0.5, ease: 'power2.inOut' }
          );
        }

        // If content is tall, scroll through it while pinned
        if (isTall) {
          tl.to(inner, {
            y: -(contentHeight - windowHeight + 100),
            duration: 2,
            ease: 'none'
          });
        } else {
          tl.to({}, { duration: 1 }); // Hold shorter sections
        }

        if (i < sections.length - 1) {
          tl.to(inner, {
            opacity: 0,
            scale: 0.98,
            y: isTall ? -(contentHeight - windowHeight + 150) : -50,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => gsap.set(inner, { visibility: 'hidden' }),
            onReverseComplete: () => gsap.set(inner, { visibility: 'visible' })
          });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: containerRef, dependencies: [childCount(children), reducedMotion] },
  );

  return (
    <main
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx('w-full overflow-x-hidden', className)}
    >
      {children}
    </main>
  );
};

export default FlowArt;
