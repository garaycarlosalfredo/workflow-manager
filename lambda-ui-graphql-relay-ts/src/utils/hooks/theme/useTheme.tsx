import { useContext } from "react";

import { ThemeData } from "../../../config/Theme.data";
import { ThemeContext } from "@contexts";

/**
 * Hook to read application configuration settings
 */
export default function useTheme(): ThemeData {
  const config = useContext(ThemeContext);
  if (!config) {
    throw new Error("Theme context not initialized!");
  }
  return config;
}

