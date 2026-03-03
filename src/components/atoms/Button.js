export default function Button({ 
  children, 
  variant = "primary",
  className = "" 
}) {
  const base =
    "px-6 py-3 rounded-lg text-sm font-medium transition duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-[#0F1115] border border-white/10 text-white hover:bg-[#15181D]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}