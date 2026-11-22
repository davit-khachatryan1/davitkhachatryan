import { CoverFrame, Pill, Arrow, C } from "./CoverParts";

const steps = [
  { n: "1", name: "Form", sub: "webhook" },
  { n: "2", name: "Clay", sub: "enrich" },
  { n: "3", name: "Score", sub: "rules" },
  { n: "4", name: "Route", sub: "HubSpot · Slack" },
];

const STEP_W = 150;
const GAP = 40;
const X0 = 40;

const LeadRoutingCover = ({ alt }) => (
  <CoverFrame alt={alt}>
    {/* pipeline */}
    {steps.map((step, i) => {
      const x = X0 + i * (STEP_W + GAP);
      return (
        <g key={step.name}>
          <rect x={x} y="50" width={STEP_W} height="96" rx="12" fill={C.panel} stroke={i === 3 ? C.accent : C.border} />
          <circle cx={x + 26} cy="80" r="14" fill={C.accentSoft} stroke={C.accent} />
          <text x={x + 26} y="86" textAnchor="middle" fontSize="15" fontWeight="600" fill={C.accent}>
            {step.n}
          </text>
          <text x={x + 50} y="86" fontSize="22" fontWeight="600" fill={C.heading}>
            {step.name}
          </text>
          <text x={x + 18} y="124" fontSize="15" fill={C.text}>
            {step.sub}
          </text>
          {i < 3 && <Arrow x1={x + STEP_W + 6} x2={x + STEP_W + GAP - 6} y={98} />}
        </g>
      );
    })}

    {/* example lead flowing through */}
    <g stroke={C.accent} strokeWidth="2" strokeDasharray="5 6" fill="none" opacity="0.7">
      <line x1="115" y1="146" x2="115" y2="200" />
      <line x1="495" y1="146" x2="495" y2="200" />
      <line x1="685" y1="146" x2="685" y2="330" />
      <line x1="345" y1="235" x2="438" y2="235" />
    </g>
    <rect x="40" y="200" width="300" height="104" rx="12" fill={C.card} />
    <text x="60" y="236" fontSize="22" fontWeight="600" fill={C.heading}>
      Jordan Lee
    </text>
    <text x="60" y="262" fontSize="17" fill={C.text}>
      Head of Ops · Brightline
    </text>
    <text x="60" y="287" fontSize="17" fill={C.text}>
      240 employees
    </text>

    <rect x="440" y="204" width="110" height="62" rx="12" fill={C.accentSoft} stroke={C.accent} strokeWidth="2" />
    <text x="495" y="243" textAnchor="middle" fontSize="22" fontWeight="700" fill={C.accent}>
      Hot · 82
    </text>

    {/* Slack-style alert */}
    <rect x="400" y="330" width="360" height="120" rx="12" fill={C.panel} stroke={C.border} />
    <rect x="420" y="350" width="30" height="30" rx="7" fill={C.accent} />
    <text x="462" y="372" fontSize="15" fontWeight="600" fill={C.heading}>
      Lead Router
    </text>
    <text x="420" y="410" fontSize="20" fontWeight="600" fill={C.heading}>
      🔥 New hot lead: Brightline
    </text>
    <text x="420" y="436" fontSize="15" fill={C.text}>
      Jordan Lee · Score 82
    </text>

    {/* tools */}
    <Pill x={40} y={340} w={78} label="Zapier" />
    <Pill x={126} y={340} w={62} label="Clay" />
    <Pill x={40} y={380} w={92} label="HubSpot" />
    <Pill x={140} y={380} w={72} label="Slack" accent />
    <Pill x={40} y={420} w={150} label="Google Sheets" />
  </CoverFrame>
);

export default LeadRoutingCover;
