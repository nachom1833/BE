"use client";

import React, { useState } from "react";
import { ThemeSwitcher } from "@/components/ui/apple-liquid-glass-switcher";
import "../globals.css";

type Theme = "light" | "dark" | "dim";

export default function DemoPage() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className="theme-provider" data-theme={theme}>
      <ThemeSwitcher value={theme} onValueChange={setTheme} />
      <article className="article p-6">
        <h1>Liquid glass</h1>
        <p>Sample content…</p>
        {/* trimmed for brevity */}
      </article>
    </div>
  );
}
