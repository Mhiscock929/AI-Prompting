export function Button({ children, onClick, variant = "primary", disabled }) {
    const className =
      variant === "outline"
        ? "border border-blue-500 text-blue-500 rounded-xl p-2 hover:bg-blue-100"
        : "bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-600";
    
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    );
  }
  