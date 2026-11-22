import { CoverFrame, Pill, Btn, Arrow, C } from "./CoverParts";

const Tool = ({ y, name, mode }) => (
  <g>
    <rect x="590" y={y} width="180" height="46" rx="10" fill={C.card} stroke={C.border} />
    <text x="606" y={y + 29} fontSize="16" fontWeight="500" fill={C.heading}>
      {name}
    </text>
    <circle cx="752" cy={y + 23} r="5" fill={mode === "write" ? "#f59f00" : C.accent} />
  </g>
);

const McpServerCover = ({ alt }) => (
  <CoverFrame alt={alt}>
    {/* AI chat */}
    <rect x="30" y="30" width="440" height="440" rx="14" fill={C.panel} stroke={C.border} />
    <text x="52" y="66" fontSize="17" fontWeight="600" fill={C.heading}>
      AI assistant
    </text>
    <line x1="30" y1="82" x2="470" y2="82" stroke={C.border} />

    <rect x="130" y="98" width="320" height="62" rx="14" fill={C.accentSoft} stroke={C.accent} />
    <text x="146" y="124" fontSize="16" fill={C.heading}>
      Which open deals at Orbit Freight
    </text>
    <text x="146" y="146" fontSize="16" fill={C.heading}>
      have gone quiet this month?
    </text>

    {/* tool call card */}
    <rect x="52" y="176" width="396" height="112" rx="12" fill={C.card} />
    <rect x="52" y="176" width="5" height="112" rx="2.5" fill={C.accent} />
    <text x="74" y="204" fontSize="15" fill={C.muted}>
      Tool call
    </text>
    <text x="74" y="230" fontSize="19" fontWeight="600" fill={C.accent}>
      search_deals
    </text>
    <text x="74" y="256" fontSize="15" fill={C.text}>
      {"{ company: \"Orbit Freight\", idle_days: 30 }"}
    </text>
    <rect x="352" y="196" width="80" height="26" rx="13" fill={C.accentSoft} stroke={C.accent} />
    <text x="392" y="214" textAnchor="middle" fontSize="14" fontWeight="600" fill={C.accent}>
      read-only
    </text>

    {/* result */}
    <rect x="52" y="302" width="396" height="86" rx="12" fill={C.bg} stroke={C.border} />
    <text x="74" y="330" fontSize="16" fill={C.heading}>
      2 deals · last touch 41 and 37 days ago
    </text>
    <text x="74" y="356" fontSize="15" fill={C.text}>
      Pilot renewal · $18k · Owner: Sam
    </text>
    <text x="74" y="376" fontSize="15" fill={C.text}>
      Depot expansion · $42k · Owner: Priya
    </text>

    {/* write needs approval */}
    <Btn x={52} y={408} w={190} h={40} label="Approve: log note" size={15} primary />
    <Btn x={254} y={408} w={100} h={40} label="Deny" size={15} />

    {/* connection to server */}
    <Arrow x1={476} x2={582} y={250} />

    {/* MCP server tools */}
    <rect x="575" y="30" width="195" height="52" rx="12" fill={C.accentSoft} stroke={C.accent} strokeWidth="2" />
    <text x="672" y="62" textAnchor="middle" fontSize="19" fontWeight="700" fill={C.accent}>
      MCP server
    </text>
    <Tool y={100} name="search_deals" mode="read" />
    <Tool y={156} name="get_contact" mode="read" />
    <Tool y={212} name="list_activity" mode="read" />
    <Tool y={268} name="log_note" mode="write" />
    <Tool y={324} name="update_stage" mode="write" />

    <Pill x={575} y={392} w={104} label="TypeScript" size={14} />
    <Pill x={687} y={392} w={83} label="OAuth" size={14} />
    <Pill x={575} y={430} w={60} label="Zod" size={14} />
    <Pill x={643} y={430} w={86} label="HubSpot" size={14} accent />
  </CoverFrame>
);

export default McpServerCover;
