import { motion } from "framer-motion";
import { tokens } from "../../styles/tokens";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,        // new
  type = "button", // new (default "button")
  disabled = false, // new
}) => {
  const variants = {
    primary: {
      background: "rgba(15, 15, 15, 0.88)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    secondary: {
      background: "rgba(255,255,255,0.55)",
      color: "#0A0A0A",
      border: "1px solid rgba(255,255,255,0.7)",
      backdropFilter: "blur(20px)",
    },
  };

  const sizes = {
    sm: {
      padding: "0.75rem 1rem",
      fontSize: "0.85rem",
    },
    md: {
      padding: "1rem 1.5rem",
      fontSize: "0.95rem",
    },
    lg: {
      padding: "1.1rem 1.8rem",
      fontSize: "1rem",
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // Conditionally apply hover/tap animations only when not disabled
      whileHover={disabled ? {} : { y: -3, scaleX: 1.015, scaleY: 1.03 }}
      whileTap={disabled ? {} : { scaleX: 0.97, scaleY: 0.94 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
        mass: 0.7,
      }}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: tokens.radius.md,
        fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        WebkitBackdropFilter: "blur(24px)",
        backdropFilter: "blur(24px)",
        transition: tokens.transition.smooth,
        opacity: disabled ? 0.65 : 1,  // visual feedback for disabled state
        pointerEvents: disabled ? "none" : "auto", // prevent clicks when disabled
      }}
    >
      {/* LIQUID LIGHT REFLECTION - hide when disabled */}
      {!disabled && (
        <motion.div
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.22), transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      <span
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default Button;