import { CoverFrame, Pill, Btn, C } from "./CoverParts";

const Bar = ({ y, label, value }) => (
  <g>
    <text x="595" y={y} fontSize="18" fill={C.text}>
      {label}
    </text>
    <text x="745" y={y} textAnchor="end" fontSize="18" fontWeight="600" fill={C.heading}>
      {value}
    </text>
    <rect x="595" y={y + 12} width="150" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
    <rect x="595" y={y + 12} width={(150 * value) / 100} height="10" rx="5" fill={C.accent} />
  </g>
);

const LeadReacherCover = ({ alt }) => (
  <CoverFrame alt={alt}>
    {/* Slack-style message */}
    <rect x="30" y="30" width="520" height="440" rx="14" fill={C.panel} stroke={C.border} />
    <rect x="50" y="50" width="36" height="36" rx="8" fill={C.accent} />
    <text x="98" y="74" fontSize="19" fontWeight="600" fill={C.heading}>
      Lead Reacher
    </text>
    <rect x="224" y="58" width="48" height="22" rx="4" fill="rgba(255,255,255,0.08)" />
    <text x="248" y="74" textAnchor="middle" fontSize="13" fontWeight="600" fill={C.text}>
      APP
    </text>
    <text x="50" y="118" fontSize="22" fontWeight="600" fill={C.heading}>
      🎯 Weekly picks · 5 leads
    </text>

    {/* lead card */}
    <rect x="50" y="134" width="480" height="250" rx="12" fill={C.card} />
    <rect x="50" y="134" width="5" height="250" rx="2.5" fill={C.accent} />
    <text x="74" y="170" fontSize="22" fontWeight="600" fill={C.heading}>
      Acme Robotics
    </text>
    <Pill x={250} y={148} w={100} label="Lost deal" size={15} />
    <Pill x={360} y={148} w={110} label="Score 86" size={15} accent />
    <text x="74" y="204" fontSize="16" fill={C.text}>
      <tspan fontWeight="600" fill={C.accent}>
        Why now:
      </tspan>{" "}
      raised Series B in October
    </text>
    <text x="74" y="226" fontSize="16" fill={C.text}>
      · new VP of Sales
    </text>

    {/* draft snippet */}
    <rect x="74" y="244" width="432" height="116" rx="10" fill={C.bg} stroke={C.border} />
    <text x="90" y="274" fontSize="15" fill={C.text} fontStyle="italic">
      “Hi Dana, congrats on the Series B.
    </text>
    <text x="90" y="296" fontSize="15" fill={C.text} fontStyle="italic">
      Since we last spoke, we shipped…”
    </text>
    <rect x="90" y="316" width="150" height="30" rx="15" fill={C.accentSoft} stroke={C.accent} />
    <text x="165" y="337" textAnchor="middle" fontSize="15" fontWeight="600" fill={C.accent}>
      ✓ Fact-checked
    </text>

    {/* action buttons */}
    <Btn x={50} y={406} w={140} h={42} label="Contacted" size={17} primary />
    <Btn x={202} y={406} w={96} h={42} label="Skip" size={17} />
    <Btn x={310} y={406} w={150} h={42} label="Not relevant" size={17} />

    {/* score bars */}
    <rect x="575" y="134" width="195" height="250" rx="12" fill={C.cardAlt} stroke={C.border} />
    <text x="595" y="166" fontSize="16" fill={C.muted}>
      Score breakdown
    </text>
    <Bar y={206} label="Fit" value={92} />
    <Bar y={278} label="Why now" value={88} />
    <Bar y={350} label="Relationship" value={78} />

    <Pill x={575} y={406} w={56} label="n8n" size={15} />
    <Pill x={639} y={406} w={78} label="HubSpot" size={15} />
    <Pill x={575} y={444} w={62} label="Slack" size={15} accent />
  </CoverFrame>
);

export default LeadReacherCover;
