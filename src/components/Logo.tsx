interface LogoProps {
  size?: "nav" | "footer";
}

export default function Logo({ size = "nav" }: LogoProps) {
  const width = size === "nav" ? 100 : 90;
  return (
    <img
      src="/redapt-logo-color.svg"
      alt="Redapt"
      width={width}
      style={{ width, height: "auto" }}
    />
  );
}
