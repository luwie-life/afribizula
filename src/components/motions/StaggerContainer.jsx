import { motion } from "framer-motion";

const container = {

  hidden: {},

  show: {

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const StaggerContainer = ({
  children,
}) => {

  return (
    <motion.div

      variants={container}

      initial="hidden"

      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;