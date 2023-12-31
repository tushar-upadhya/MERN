import { AnimatePresence, animate, motion } from "framer-motion";

const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1.5 },
  keyValue,
  className,
}) => {
  return (
    <motion.div
      initial={initial}
      key={keyValue}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
