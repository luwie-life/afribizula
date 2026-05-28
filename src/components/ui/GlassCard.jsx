import { motion } from "framer-motion";
import { tokens } from "../../styles/tokens";

const GlassCard = ({
  children,
}) => {

  return (
    <motion.div

      whileHover={{
        y: -4,
        scale: 1.01,
      }}

      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}

      style={{
        position: "relative",

        overflow: "hidden",

        padding: "2rem",

        borderRadius: tokens.radius.lg,

        background:
          "rgba(255,255,255,0.45)",

        border:
          "1px solid rgba(255,255,255,0.5)",

        backdropFilter: "blur(30px)",

        WebkitBackdropFilter: "blur(30px)",

        boxShadow:
          "0 20px 60px rgba(0,0,0,0.08)",

        transition:
          tokens.transition.smooth,
      }}
    >

      {/* LIGHT REFLECTION */}

      <motion.div

        initial={{
          opacity: 0,
        }}

        whileHover={{
          opacity: 1,
        }}

        transition={{
          duration: 0.35,
        }}

        style={{
          position: "absolute",

          inset: 0,

          background:
            "linear-gradient(135deg, rgba(255,255,255,0.22), transparent 45%)",

          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>

    </motion.div>
  );
};

export default GlassCard;