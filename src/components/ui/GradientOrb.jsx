import { motion } from "framer-motion";

const GradientOrb = () => {

  return (
    <motion.div

      animate={{
        y: [0, -20, 0],

        scale: [1, 1.05, 1],
      }}

      transition={{
        duration: 8,

        repeat: Infinity,

        ease: "easeInOut",
      }}

      style={{
        width: "320px",

        height: "320px",

        borderRadius: "999px",

        background:
          "linear-gradient(135deg, #A855F7, #3B82F6)",

        filter: "blur(60px)",

        opacity: 0.35,

        position: "absolute",
      }}
    />
  );
};

export default GradientOrb;