import { motion } from "framer-motion";
import { tokens } from "../../styles/tokens";

const Input = ({
  placeholder,
  type = "text",
}) => {

  return (
    <motion.input

      type={type}

      placeholder={placeholder}

      whileFocus={{
        scale: 1.01,
      }}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}

      style={{
        width: "100%",

        padding: "1rem 1.2rem",

        borderRadius: tokens.radius.md,

        border:
          "1px solid rgba(255,255,255,0.6)",

        background:
          "rgba(255,255,255,0.55)",

        backdropFilter: "blur(20px)",

        WebkitBackdropFilter: "blur(20px)",

        fontSize: "0.95rem",

        outline: "none",

        boxShadow:
          "0 8px 30px rgba(0,0,0,0.05)",

        transition:
          tokens.transition.smooth,
      }}
    />
  );
};

export default Input;