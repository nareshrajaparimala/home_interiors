interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "purple" | "blue" | "amber" | "green" | "rose" | "indigo";
}

const sizeMap = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-20 w-20" };
const iconSizeMap = { sm: "h-5 w-5", md: "h-7 w-7", lg: "h-10 w-10" };

const colorMap = {
  purple: { bg: "from-purple-500 to-purple-700", shadow: "shadow-purple-500/30", ring: "ring-purple-200" },
  blue: { bg: "from-blue-500 to-blue-700", shadow: "shadow-blue-500/30", ring: "ring-blue-200" },
  amber: { bg: "from-amber-400 to-amber-600", shadow: "shadow-amber-500/30", ring: "ring-amber-200" },
  green: { bg: "from-emerald-500 to-emerald-700", shadow: "shadow-emerald-500/30", ring: "ring-emerald-200" },
  rose: { bg: "from-rose-500 to-rose-700", shadow: "shadow-rose-500/30", ring: "ring-rose-200" },
  indigo: { bg: "from-indigo-500 to-indigo-700", shadow: "shadow-indigo-500/30", ring: "ring-indigo-200" },
};

export default function Icon3D({ children, size = "md", color = "purple" }: Props) {
  const c = colorMap[color];
  return (
    <div
      className={`${sizeMap[size]} relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${c.bg} shadow-lg ${c.shadow} ring-2 ${c.ring} ring-offset-2 ring-offset-white`}
      style={{ transform: "perspective(500px) rotateX(5deg)", transformStyle: "preserve-3d" }}
    >
      <svg
        className={`${iconSizeMap[size]} stroke-white drop-shadow-sm`}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
      {/* 3D bottom edge */}
      <div className={`absolute -bottom-1 left-1 right-1 h-2 rounded-b-2xl bg-gradient-to-br ${c.bg} opacity-40 blur-[1px]`} />
    </div>
  );
}
