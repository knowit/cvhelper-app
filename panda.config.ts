import { defineConfig } from "@pandacss/dev";
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'red',
      grayColor: 'mauve',
      borderRadius: 'sm',
    })
  ],
  
  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],
  
  globalCss: {
    extend: {
      "html, body, main": {
        display: "flex",
        flexDirection: "column"
      },
      "body, main": {
        flexGrow: 1
      }
    }
  },

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" }
        }
      }
    },
  },
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
