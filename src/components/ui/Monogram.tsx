import type { SVGProps } from "react";

// Traçado a partir do monograma oficial, preservando proporções e terminações.
// O PNG original é preservado para os usos de marca; este traçado serve à animação.
export function Monogram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 580 730" fill="none" aria-hidden="true" {...props}>
      <path data-arc="outer" d="M40 670V271C40 137 152 29 289 29S538 137 538 271V535" stroke="currentColor" strokeWidth="25" strokeLinecap="round" />
      <path data-arc="inner" d="M117 670V309C117 211 195 133 292 133S465 211 465 309V696" stroke="var(--color-taupe)" strokeWidth="17" strokeLinecap="round" />
      <circle data-arc="dot" cx="538" cy="595" r="28" fill="var(--color-taupe)" />
    </svg>
  );
}
