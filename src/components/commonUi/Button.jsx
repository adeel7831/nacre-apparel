const Button = ({
  text = "",
  variant = "outline", // default
  onClick,
  disabled = false,
  className = "",
  children= null
}) => {
  // Variant based styles
  const baseClasses =
    "px-5 py-2 rounded border font-medium transition-colors duration-200 cursor-pointer";

  const variantClasses = {
    primary: "bg-blue-100 border-gray-700 text-gray-700 hover:bg-blue-200",
    outline: "bg-transparent border-gray-700 text-gray-700 hover:text-gray-800 hover:bg-gray-200",
    danger: "bg-red-200 border-red-300 text-red-700 hover:bg-red-300",
  };

  const disabledClasses =
    "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-70";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : variantClasses[variant]
      } ${className}`}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
