import { AnimatePresence, motion } from "framer-motion";

const CommonAnimation = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        className={className}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default CommonAnimation;
