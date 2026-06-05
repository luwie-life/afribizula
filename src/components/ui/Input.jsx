import { motion } from "framer-motion";
import { tokens } from "../../Styles/Tokens";

const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  return (
    <motion.input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        width: "100%",
        padding: "1rem 1.2rem",
        borderRadius: tokens.radius.md,
        border: "1px solid rgba(255,255,255,0.6)",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        fontSize: "0.95rem",
        outline: "none",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
        transition: tokens.transition.smooth,
      }}
    />
  );
};

export default Input;