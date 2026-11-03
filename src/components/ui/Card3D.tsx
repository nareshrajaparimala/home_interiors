"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: -2,
        boxShadow: "0 25px 50px -12px rgba(109, 40, 217, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
