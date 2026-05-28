import { motion } from "framer-motion";

const item = {

  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const FadeIn = ({
  children,
}) => {

  return (
    <motion.div

      variants={item}

      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;