const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export function createProjectPreview({ title, accent = '#8b5cf6', accentTwo = '#38bdf8', tag = '' }) {
  const safeTitle = escapeXml(title);
  const safeTag = escapeXml(tag);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" fill="none">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="${accentTwo}" />
        </linearGradient>
        <radialGradient id="r" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="720" rx="48" fill="#08111f" />
      <circle cx="190" cy="160" r="240" fill="url(#r)" />
      <circle cx="980" cy="600" r="290" fill="url(#r)" opacity="0.55" />
      <rect x="80" y="82" width="1040" height="556" rx="36" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
      <rect x="140" y="150" width="920" height="58" rx="19" fill="url(#g)" opacity="0.18" />
      <rect x="140" y="236" width="460" height="280" rx="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
      <rect x="636" y="236" width="424" height="88" rx="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
      <rect x="636" y="346" width="424" height="170" rx="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
      <text x="140" y="142" fill="#cfd8ff" font-family="Inter, Segoe UI, sans-serif" font-size="26" letter-spacing="3">PORTFOLIO CASE STUDY</text>
      <text x="140" y="276" fill="#ffffff" font-family="Inter, Segoe UI, sans-serif" font-size="54" font-weight="700">${safeTitle}</text>
      <text x="140" y="336" fill="#c6d0ea" font-family="Inter, Segoe UI, sans-serif" font-size="26">${safeTag}</text>
      <text x="664" y="292" fill="#ffffff" font-family="Inter, Segoe UI, sans-serif" font-size="22" font-weight="600">Scalable architecture</text>
      <text x="664" y="396" fill="#ffffff" font-family="Inter, Segoe UI, sans-serif" font-size="22" font-weight="600">Secure delivery</text>
      <text x="664" y="438" fill="#c6d0ea" font-family="Inter, Segoe UI, sans-serif" font-size="18">Animated, responsive and maintainable UI</text>
      <rect x="140" y="552" width="170" height="50" rx="999" fill="url(#g)" opacity="0.9" />
      <text x="178" y="585" fill="#0b1020" font-family="Inter, Segoe UI, sans-serif" font-size="20" font-weight="700">OPEN PREVIEW</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
