import { motion } from "framer-motion";
import { useRef } from "react";

const Magnetic = ({
  children,
}) => {

  const ref = useRef(null);

  const handleMouseMove = (e) => {

    const element = ref.current;

    const rect =
      element.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    element.style.transform =
      `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };

  const reset = () => {
    ref.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <motion.div

      ref={ref}

      onMouseMove={handleMouseMove}

      onMouseLeave={reset}

      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}

      style={{
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;