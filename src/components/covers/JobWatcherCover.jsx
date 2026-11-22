import { CoverFrame, Pill, Btn, C } from "./CoverParts";

const Node = ({ x, y, label }) => (
  <g>
    <rect x={x} y={y} width="150" height="44" rx="10" fill={C.panel} stroke={C.border} />
    <text x={x + 75} y={y + 29} textAnchor="middle" fontSize="18" fill={C.text}>
      {label}
    </text>
  </g>
);

const JobWatcherCover = ({ alt }) => (
  <CoverFrame alt={alt}>
    {/* faint node graph behind the phone */}
    <g opacity="0.5">
      <g stroke={C.muted} strokeWidth="2" fill="none" strokeDasharray="6 6">
        <line x1="105" y1="134" x2="105" y2="230" />
        <line x1="105" y1="274" x2="105" y2="370" />
        <path d="M180 392 C 380 392, 440 152, 630 152" />
        <line x1="705" y1="174" x2="705" y2="300" />
      </g>
      <Node x={30} y={90} label="Schedule" />
      <Node x={30} y={230} label="Fetch" />
      <Node x={30} y={370} label="Changed?" />
      <Node x={630} y={130} label="AI" />
      <Node x={630} y={300} label="Telegram" />
    </g>
    <Pill x={30} y={440} w={62} label="n8n" />
    <Pill x={102} y={440} w={92} label="Gemini" />
    <Pill x={630} y={440} w={120} label="Telegram" accent />

    {/* phone */}
    <rect x="230" y="28" width="340" height="444" rx="34" fill="#0b0d10" stroke="rgba(255,255,255,0.18)" strokeWidth="3" />
    <rect x="240" y="38" width="320" height="424" rx="26" fill={C.panel} />
    <rect x="360" y="46" width="80" height="8" rx="4" fill="#0b0d10" />

    {/* chat header */}
    <circle cx="272" cy="86" r="16" fill={C.accent} />
    <text x="297" y="82" fontSize="17" fontWeight="600" fill={C.heading}>
      Job Watcher
    </text>
    <text x="297" y="100" fontSize="13" fill={C.muted}>
      bot
    </text>
    <line x1="240" y1="112" x2="560" y2="112" stroke={C.border} />

    {/* greeting bubble */}
    <rect x="252" y="124" width="250" height="56" rx="14" fill={C.card} />
    <text x="266" y="148" fontSize="17" fontWeight="600" fill={C.heading}>
      ☀️ Good morning, Alex!
    </text>
    <text x="266" y="169" fontSize="17" fontWeight="600" fill={C.accent}>
      3 strong matches
    </text>

    {/* job card */}
    <rect x="252" y="192" width="296" height="176" rx="14" fill={C.card} />
    <rect x="252" y="192" width="5" height="176" rx="2.5" fill={C.accent} />
    <text x="272" y="222" fontSize="19" fontWeight="600" fill={C.heading}>
      Automation Engineer
    </text>
    <text x="272" y="248" fontSize="16" fill={C.text}>
      Northwind Labs
    </text>
    <text x="272" y="275" fontSize="16" fill={C.text}>
      📍 Remote
    </text>
    <rect x="404" y="258" width="124" height="26" rx="13" fill={C.accentSoft} stroke={C.accent} />
    <text x="466" y="277" textAnchor="middle" fontSize="16" fontWeight="600" fill={C.accent}>
      ⭐ 9/10
    </text>
    <line x1="272" y1="298" x2="528" y2="298" stroke={C.border} />
    <text x="272" y="326" fontSize="16" fill={C.heading}>
      Strong n8n + JavaScript
    </text>
    <text x="272" y="348" fontSize="16" fill={C.heading}>
      match
    </text>

    {/* inline buttons */}
    <Btn x={252} y={380} w={296} label="✍️ Cover letter" primary />
    <Btn x={252} y={420} w={144} label="👍 Good match" size={14} />
    <Btn x={404} y={420} w={144} label="👎 Not for me" size={14} />
  </CoverFrame>
);

export default JobWatcherCover;
