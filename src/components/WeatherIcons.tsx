interface IconProps {
  className?: string;
  size?: number;
}

export function SunIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center circle */}
      <circle cx="32" cy="32" r="12" fill="#FDB022" />
      
      {/* Rays */}
      <g stroke="#FDB022" strokeWidth="3" strokeLinecap="round">
        {/* Top */}
        <line x1="32" y1="8" x2="32" y2="14" />
        {/* Top-right */}
        <line x1="46" y1="12" x2="42" y2="17" />
        {/* Right */}
        <line x1="56" y1="32" x2="50" y2="32" />
        {/* Bottom-right */}
        <line x1="46" y1="52" x2="42" y2="47" />
        {/* Bottom */}
        <line x1="32" y1="56" x2="32" y2="50" />
        {/* Bottom-left */}
        <line x1="18" y1="52" x2="22" y2="47" />
        {/* Left */}
        <line x1="8" y1="32" x2="14" y2="32" />
        {/* Top-left */}
        <line x1="18" y1="12" x2="22" y2="17" />
      </g>
    </svg>
  );
}

export function CloudIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 36C12 36 8 33 8 28C8 23 12 20 16 20C16 14 21 10 27 10C32 10 36 13 38 17C39 16 40 16 42 16C47 16 52 20 52 26C52 31 48 36 42 36H16Z"
        fill="#94A3B8"
        stroke="#64748B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RainIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud */}
      <path
        d="M14 30C10 30 6 27 6 22C6 17 10 14 14 14C14 8 19 4 25 4C30 4 34 7 36 11C37 10 38 10 40 10C45 10 50 14 50 20C50 25 46 30 40 30H14Z"
        fill="#94A3B8"
        stroke="#64748B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Rain drops */}
      <g stroke="#4A90E2" strokeWidth="2.5" strokeLinecap="round">
        <line x1="18" y1="36" x2="16" y2="44" />
        <line x1="26" y1="38" x2="24" y2="46" />
        <line x1="34" y1="36" x2="32" y2="44" />
        <line x1="42" y1="38" x2="40" y2="46" />
        
        <line x1="22" y1="48" x2="20" y2="56" />
        <line x1="30" y1="50" x2="28" y2="58" />
        <line x1="38" y1="48" x2="36" y2="56" />
      </g>
    </svg>
  );
}

export function PartlyCloudyIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sun */}
      <circle cx="40" cy="18" r="8" fill="#FDB022" />
      <g stroke="#FDB022" strokeWidth="2" strokeLinecap="round">
        <line x1="40" y1="4" x2="40" y2="8" />
        <line x1="52" y1="10" x2="49" y2="13" />
        <line x1="58" y1="18" x2="54" y2="18" />
        <line x1="52" y1="26" x2="49" y2="23" />
        <line x1="28" y1="10" x2="31" y2="13" />
        <line x1="22" y1="18" x2="26" y2="18" />
      </g>
      
      {/* Cloud */}
      <path
        d="M12 38C8 38 4 35 4 30C4 25 8 22 12 22C12 16 17 12 23 12C28 12 32 15 34 19C35 18 36 18 38 18C43 18 48 22 48 28C48 33 44 38 38 38H12Z"
        fill="#94A3B8"
        stroke="#64748B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SnowIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud */}
      <path
        d="M14 28C10 28 6 25 6 20C6 15 10 12 14 12C14 6 19 2 25 2C30 2 34 5 36 9C37 8 38 8 40 8C45 8 50 12 50 18C50 23 46 28 40 28H14Z"
        fill="#94A3B8"
        stroke="#64748B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Snowflakes */}
      <g stroke="#E0F2FE" fill="#E0F2FE">
        <circle cx="18" cy="38" r="2" />
        <circle cx="28" cy="42" r="2" />
        <circle cx="38" cy="38" r="2" />
        <circle cx="22" cy="50" r="2" />
        <circle cx="34" cy="50" r="2" />
        <circle cx="28" cy="56" r="2" />
      </g>
    </svg>
  );
}

export function ThunderstormIcon({ className = "", size = 64 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark cloud */}
      <path
        d="M14 28C10 28 6 25 6 20C6 15 10 12 14 12C14 6 19 2 25 2C30 2 34 5 36 9C37 8 38 8 40 8C45 8 50 12 50 18C50 23 46 28 40 28H14Z"
        fill="#64748B"
        stroke="#475569"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Lightning bolt */}
      <path
        d="M30 32L26 44H32L28 58L38 40H32L36 32H30Z"
        fill="#FDB022"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
