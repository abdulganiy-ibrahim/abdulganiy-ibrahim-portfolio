export default function BrandLogoSvg() {
  return (
    <svg
      width="450"
      height="450"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="borderGradient"
          x1="80"
          y1="80"
          x2="440"
          y2="440"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#047857"/>
          <stop offset="0.5" stop-color="#10B981"/>
          <stop offset="1" stop-color="#34D399"/>
        </linearGradient>

        <linearGradient
          id="aGradient"
          x1="190"
          y1="140"
          x2="330"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#064E3B"/>
          <stop offset="1" stop-color="#047857"/>
        </linearGradient>

        <linearGradient
          id="iGradient"
          x1="310"
          y1="160"
          x2="390"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#10B981"/>
          <stop offset="1" stop-color="#059669"/>
        </linearGradient>

        <filter
          id="shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="150%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            flood-color="#064E3B"
            flood-opacity="0.16"
          />
        </filter>
      </defs>

      <rect
        x="28"
        y="28"
        width="456"
        height="456"
        rx="92"
        fill="white"
        filter="url(#shadow)"
      />

      <rect
        x="28"
        y="28"
        width="456"
        height="456"
        rx="92"
        stroke="url(#borderGradient)"
        stroke-width="8"
      />

      <path
        d="
          M145 390
          L241 115
          L340 390
          L292 390
          L266 313
          L215 313
          L228 270
          L253 270
          L241 229
          L195 350
          Z
        "
        fill="url(#aGradient)"
      />

      <path
        d="
          M143 390
          C175 342 216 323 270 330
          C286 332 300 337 314 344
          L322 367
          C299 356 275 350 250 351
          C207 353 175 369 154 390
          Z
        "
        fill="#10B981"
      />

      <path
        d="
          M329 201
          L377 177
          L377 390
          L329 390
          Z
        "
        fill="url(#iGradient)"
      />

      <path
        d="
          M329 151
          L377 127
          L377 174
          L329 198
          Z
        "
        fill="#10B981"
      />
    </svg>
  )
}