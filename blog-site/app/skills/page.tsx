"use client";

import { usePathname } from "next/navigation";
import { SkillsGrids } from "../components/DataGridSkills/SkillsGrids";

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
      <SkillsGrids></SkillsGrids>
    </div>
  );
}
