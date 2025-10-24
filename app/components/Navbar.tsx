"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiSearch } from 'react-icons/fi';
import { GiWaves } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

interface MenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const menuItems: MenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Events', ariaLabel: 'View upcoming events', link: '#events' },
    { label: 'Community', ariaLabel: 'Learn about our community', link: '#community' },
  ];

  const socialItems: SocialItem[] = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Email', link: 'mailto:info@portlaken.com' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100 });
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: '#fff' });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime);

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } }, itemsStart);
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity' as any]: 1, stagger: { each: 0.08, from: 'start' } }, itemsStart + 0.1);
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08, from: 'start' }, onComplete: () => { gsap.set(socialLinks, { clearProps: 'opacity' }); } }, socialsStart + 0.04);
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[];
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      }
    });
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      playOpen();
    } else {
      playClose();
    }

    animateIcon(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateText]);

  return (
    <div className="sm-scope w-full">
      <div className="staggered-menu-wrapper relative w-full h-full" style={{ ['--sm-accent' as any]: '#C49475' } as React.CSSProperties} data-open={open || undefined}>
        <div ref={preLayersRef} className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]" aria-hidden="true">
          <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: 'linear-gradient(135deg, #C49475 0%, #B88565 100%)' }} />
          <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: '#C49475' }} />
        </div>

        <header className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-8 bg-transparent pointer-events-none z-20" aria-label="Main navigation header">
          <div className="sm-logo flex items-center select-none pointer-events-auto gap-3" aria-label="Logo">
            <GiWaves className="text-white text-2xl" />
            <span className="text-white font-bold text-xl">Port Laken</span>
            <span className="hidden md:flex items-center gap-1 text-white/90 ml-4">
              <MdLocationOn className="text-lg" />
              56°C
            </span>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8 pointer-events-auto">
            <div className="glassmorphic-strong rounded-full px-6 py-2 flex items-center gap-3 w-full shadow-lg">
              <FiSearch className="text-white/80 text-lg" />
              <input
                type="text"
                placeholder="Search for services, resources, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 text-sm"
              />
              <button type="submit" className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-1 rounded-full text-white text-sm font-medium">
                Search
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4 pointer-events-auto">
            <FaTwitter className="hidden md:block text-xl text-white hover:text-white/80 transition-colors cursor-pointer" />
            <FaInstagram className="hidden md:block text-xl text-white hover:text-white/80 transition-colors cursor-pointer" />
            <FaEnvelope className="hidden md:block text-xl text-white hover:text-white/80 transition-colors cursor-pointer" />
            
            <button
              ref={toggleBtnRef}
              className="sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none text-white"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={toggleMenu}
              type="button"
            >
              <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none h-[1em] overflow-hidden">
                {textLines.map((l, i) => (
                  <span className="sm-toggle-line block h-[1em] leading-none" key={i}>{l}</span>
                ))}
              </span>
              <span ref={iconRef} className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center" aria-hidden="true">
                <span ref={plusHRef} className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2" />
                <span ref={plusVRef} className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2" />
              </span>
            </button>
          </div>
        </header>

        <aside
          ref={panelRef}
          className="staggered-menu-panel absolute top-0 right-0 h-screen bg-white/95 flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[20px] shadow-2xl"
          style={{ WebkitBackdropFilter: 'blur(20px)', width: 'clamp(280px, 40vw, 480px)' }}
          aria-hidden={!open}
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-5">
            <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2" role="list" data-numbering>
              {menuItems.map((it, idx) => (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                  <a
                    className="sm-panel-item relative text-gray-900 font-playfair font-bold text-[3.5rem] cursor-pointer leading-none tracking-[-1px] inline-block no-underline pr-[1.4em]"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                  >
                    <span className="sm-panel-itemLabel inline-block">{it.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="sm-socials mt-auto pt-8 flex flex-col gap-4 border-t border-gray-200" aria-label="Social links">
              <h3 className="sm-socials-title m-0 text-sm font-nunito font-semibold uppercase tracking-wider" style={{ color: '#C49475' }}>Connect With Us</h3>
              <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-6 flex-wrap" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link text-base font-nunito font-medium text-gray-700 no-underline relative inline-block py-[2px]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .sm-scope .sm-toggle-textInner { height: 1em; overflow: hidden; }
        .sm-scope .sm-icon-line { will-change: transform; }
        .sm-scope .sm-panel-item { 
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .sm-scope .sm-panel-item:hover { 
          color: #C49475;
          transform: translateX(8px);
        }
        .sm-scope .sm-panel-itemLabel { will-change: transform; transform-origin: 50% 100%; }
        .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.2em;
          right: 2.8em;
          font-size: 16px;
          font-weight: 500;
          color: #C49475;
          letter-spacing: 0;
          pointer-events: none;
          user-select: none;
          opacity: var(--sm-num-opacity, 0);
          font-family: 'Nunito Sans', sans-serif;
        }
        .sm-scope .sm-socials-list .sm-socials-link { 
          opacity: 1; 
          transition: opacity 0.3s ease, color 0.3s ease;
          position: relative;
        }
        .sm-scope .sm-socials-list .sm-socials-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #C49475;
          transition: width 0.3s ease;
        }
        .sm-scope .sm-socials-list .sm-socials-link:hover::after {
          width: 100%;
        }
        .sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.5; }
        .sm-scope .sm-socials-link:hover { color: #C49475; }
        @media (max-width: 1024px) {
          .sm-scope .staggered-menu-panel { width: 100% !important; }
          .sm-scope .staggered-menu-wrapper[data-open] .sm-logo { filter: invert(100%); }
          .sm-scope .sm-panel-item { font-size: 2.5rem !important; }
        }
        @media (max-width: 640px) {
          .sm-scope .sm-panel-item { font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
