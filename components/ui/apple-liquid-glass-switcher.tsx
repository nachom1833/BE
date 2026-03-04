"use client";

import React, { useState, useEffect } from "react";

type Theme = "light" | "dark" | "dim";

interface ThemeSwitcherProps {
  defaultValue?: Theme;
  value?: Theme;
  onValueChange?: (theme: Theme) => void;
}

const themeOptions: { value: Theme; cOption: string; icon: React.ReactNode }[] = [
  { value: "light", cOption: "1", icon: <span className="sr-only">Light</span> },
  { value: "dark", cOption: "2", icon: <span className="sr-only">Dark</span> },
  { value: "dim", cOption: "3", icon: <span className="sr-only">Dim</span> },
];

export function ThemeSwitcher({
  defaultValue = "light",
  value,
  onValueChange,
}: ThemeSwitcherProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const lookupC = (v?: Theme | null): string | null => {
    if (!v) return null;
    const found = themeOptions.find((opt) => opt.value === v);
    return found ? found.cOption : null;
  };

  const [previousOption, setPreviousOption] = useState<string | null>(
    lookupC(value ?? internalValue)
  );

  const activeValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  const handleChange = (newValue: Theme) => {
    setPreviousOption(lookupC(activeValue));
    if (onValueChange) onValueChange(newValue);
    else setInternalValue(newValue);
  };

  return (
    <div className="switcher inline-flex items-center gap-2">
      {themeOptions.map((option) => (
        <label key={option.value} className="switcher__option">
          <input
            className="switcher__input sr-only"
            type="radio"
            name="theme"
            value={option.value}
            checked={activeValue === option.value}
            onChange={() => handleChange(option.value)}
          />
          <span className="p-2 rounded border">{option.value}</span>
        </label>
      ))}
    </div>
  );
}
