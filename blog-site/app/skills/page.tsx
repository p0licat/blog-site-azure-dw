"use client";

import { usePathname } from "next/navigation";
import { SkillsGrids } from "../components/DataGridSkills/SkillsGrids";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const pathname = usePathname();
  return (
    <div
      className="main"
      style={{
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "400px" }}
        transition={{
          duration: 2.0,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <SkillsGrids></SkillsGrids>
      </motion.div>
    </div>
  );
}
