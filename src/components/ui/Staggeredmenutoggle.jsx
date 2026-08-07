import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Botón animado extraído del StaggeredMenu original: ciclo de texto Menu/Close
// y el ícono "+" que rota a "×". Se controla 100% desde afuera vía `open` y `onToggle`,
// para poder vivir en el Navbar en vez de dentro del header absoluto del panel.
//
// Nota: el tamaño/posición del ícono usa estilos inline (no clases arbitrarias de
// Tailwind) para garantizar que siempre se renderice, sin depender de que Tailwind
// haya procesado este archivo.
const StaggeredMenuToggle = ({
  open,
  onToggle,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  className = ''
}) => {
  const openRef = useRef(open);

  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);

  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(open ? ['Close', 'Menu'] : ['Menu', 'Close']);

  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!plusH || !plusV || !icon || !textInner) return;

      if (open) {
        gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 45 });
        gsap.set(plusV, { transformOrigin: '50% 50%', rotate: -45 });
      } else {
        gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
        gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      }
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, {
          color: changeMenuColorOnOpen ? (open ? openMenuButtonColor : menuButtonColor) : menuButtonColor
        });
      }
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    opening => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq = [currentLabel];
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

  // Reacciona cuando `open` cambia, sin importar quién lo disparó
  // (este mismo botón, un click en un item, o click-away).
  React.useEffect(() => {
    if (openRef.current === open) return;
    openRef.current = open;
    animateIcon(open);
    animateColor(open);
    animateText(open);
  }, [open, animateIcon, animateColor, animateText]);

  return (
    <button
      ref={toggleBtnRef}
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible ${className}`}
      style={{ gap: '0.5rem' }}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="staggered-menu-panel"
    >
      <span
        ref={textWrapRef}
        style={{
          position: 'relative',
          display: 'inline-block',
          height: '1em',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
        aria-hidden="true"
      >
        <span
          ref={textInnerRef}
          style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
        >
          {textLines.map((l, i) => (
            <span style={{ display: 'block', height: '1em', lineHeight: 1 }} key={i}>
              {l}
            </span>
          ))}
        </span>
      </span>

      <span
        ref={iconRef}
        style={{
          position: 'relative',
          width: '14px',
          height: '14px',
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-hidden="true"
      >
        <span
          ref={plusHRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '100%',
            height: '2px',
            background: 'currentColor',
            borderRadius: '2px',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <span
          ref={plusVRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '100%',
            height: '2px',
            background: 'currentColor',
            borderRadius: '2px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </span>
    </button>
  );
};

export default StaggeredMenuToggle;