import Image from 'next/image';

type LogoProps = {
  /** Show the wordmark next to the mark */
  withWordmark?: boolean;
  /** Sub-brand lockup — appends "gifts" in coral */
  subBrand?: 'gifts' | null;
  /** Show "Technically Thoughtful" tagline below the lockup */
  withTagline?: boolean;
  /** Variant determines text colors for dark vs. light backgrounds */
  variant?: 'light' | 'dark';
  /** Size of the mark in pixels (wordmark scales proportionally) */
  size?: number;
  className?: string;
};

/**
 * The Sunbrd brand lockup.
 *
 * Per the brand guidelines:
 *   - The mark is a hand-illustrated SVG (never recreated).
 *   - "sunbrd" is always in indigo (#302D7B); "gifts" is always in coral (#ED704D).
 *   - The tagline "Technically Thoughtful" is in saffron (#ED9C43), italic.
 *   - On dark backgrounds, "sunbrd" becomes white.
 */
export default function SunbrdLogo({
  withWordmark = false,
  subBrand = null,
  withTagline = false,
  variant = 'light',
  size = 36,
  className = '',
}: LogoProps) {
  const sunbrdColor = variant === 'dark' ? 'text-white' : 'text-logo-indigo';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.svg"
        alt="Sunbrd"
        width={size}
        height={size}
        priority
        className="flex-shrink-0"
      />
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5 font-display font-semibold tracking-tight"
               style={{ fontSize: `${size * 0.6}px` }}>
            <span className={sunbrdColor}>sunbrd</span>
            {subBrand === 'gifts' && (
              <span className="text-logo-coral">gifts</span>
            )}
          </div>
          {withTagline && (
            <span
              className="font-display italic text-logo-saffron mt-0.5"
              style={{ fontSize: `${size * 0.3}px` }}
            >
              Technically Thoughtful
            </span>
          )}
        </div>
      )}
    </div>
  );
}
