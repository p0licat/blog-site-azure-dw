"use client";

import { usePathname } from "next/navigation";
import { BooksGrids } from "../components/DataGridSkills/BooksGrids";

export default function BooksPage() {
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
      <BooksGrids></BooksGrids>
    </div>
  );
}
