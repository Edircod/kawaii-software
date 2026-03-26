type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const fill = variant === "dark" ? "#F1F0FF" : "#2F2982";

  return (
    <svg
      viewBox="0 0 360 64"
      role="img"
      aria-label="kawaii(x,y)"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="44"
        fill={fill}
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="-1"
      >
        kawaii(
        <tspan fill="#C400F7">x</tspan>
        ,
        <tspan fill="#4033FF">y</tspan>
        )
      </text>
    </svg>
  );
}
