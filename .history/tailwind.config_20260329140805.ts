import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import svgToDataUri from "mini-svg-data-uri";
import animatePlugin from "tailwindcss-animate";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// ✅ Custom plugin (typed)
const gridBackgroundPlugin = ({ matchUtilities, theme }: PluginAPI) => {
  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),

      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),

      "bg-dot": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.6"/></svg>`
        )}")`,
      }),
    },
    {
      values: flattenColorPalette(theme("backgroundColor")),
      type: "color",
    }
  );
};

// ✅ Colors → CSS variables plugin (typed)
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [
      `--${key}`,
      String(val),
    ])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          100: "#E4ECFF",
        },
        purple: "#CBACF9",
      },
      fontSize: {
        sm: ["14px", "20px"],
        md: ["18px", "26px"],
        large: ["50px", "1.1"],
      },
    },
  },
  plugins: [
    animatePlugin,
    addVariablesForColors,
    gridBackgroundPlugin,
    heroui(),
  ],
};

export default config;