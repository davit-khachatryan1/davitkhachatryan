import { useId } from "react";

// Shared design tokens so the three covers read as one set.
export const C = {
  bg: "#111418",
  panel: "#212529",
  card: "#2b3035",
  cardAlt: "#22262b",
  border: "rgba(255,255,255,0.1)",
  heading: "#ffffff",
  text: "#adb5bd",
  muted: "#6c757d",
  accent: "#20c997",
  accentSoft: "rgba(32,201,151,0.16)",
};

export const FONT = "var(--font-poppins), Poppins, system-ui, sans-serif";

// 16:10 canvas (matches the portfolio card). `slice` keeps it filling the 16:9 modal;
// all important content stays inside y = 30..470.
export const CoverFrame = ({ alt, children }) => {
  const glowId = `cover-glow-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      className="cover"
      fontFamily={FONT}
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={C.accent} stopOpacity="0.14" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill={C.bg} />
      <rect width="800" height="500" fill={`url(#${glowId})`} />
      {children}
    </svg>
  );
};

// Small text pill (tool names). No logos.
export const Pill = ({ x, y, label, w, h = 30, size = 15, accent = false, opacity = 1 }) => (
  <g opacity={opacity}>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={h / 2}
      fill={accent ? C.accentSoft : "rgba(255,255,255,0.06)"}
      stroke={accent ? C.accent : C.border}
    />
    <text
      x={x + w / 2}
      y={y + h / 2 + size * 0.35}
      textAnchor="middle"
      fontSize={size}
      fontWeight="500"
      fill={accent ? C.accent : C.text}
    >
      {label}
    </text>
  </g>
);

// Rounded button (chat / Slack style).
export const Btn = ({ x, y, w, h = 34, label, size = 15, primary = false }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill={primary ? C.accent : "rgba(255,255,255,0.06)"}
      stroke={primary ? C.accent : C.border}
    />
    <text
      x={x + w / 2}
      y={y + h / 2 + size * 0.35}
      textAnchor="middle"
      fontSize={size}
      fontWeight="600"
      fill={primary ? C.bg : C.heading}
    >
      {label}
    </text>
  </g>
);

// Right-pointing arrow from (x1, y) to (x2, y).
export const Arrow = ({ x1, x2, y, color = C.accent, opacity = 1 }) => (
  <g opacity={opacity} stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
    <line x1={x1} y1={y} x2={x2 - 4} y2={y} />
    <polyline points={`${x2 - 12},${y - 8} ${x2 - 3},${y} ${x2 - 12},${y + 8}`} />
  </g>
);
