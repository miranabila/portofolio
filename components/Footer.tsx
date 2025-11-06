// components/Footer.tsx
"use client";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      © {year ?? " "} Mira Nabila. All rights reserved.
    </footer>
  );
}
