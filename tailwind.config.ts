import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               50: "#E4F2FF",
               100: "#BFDDFF",
               200: "#96C9FF",
               300: "#6EB3FF",
               400: "#55A2FF",
               500: "#4592FF",
               600: "#4484F0",
               700: "#4172DC",
               800: "#3E60C9",
               900: "#3840A9",
            },
            secondary: {
               50: "#E5F7EC",
               100: "#C0EAD1",
               200: "#97DCB3",
               300: "#68CF95",
               400: "#3DC47E",
               500: "#00B967",
               600: "#00A95D",
               700: "#009750",
               800: "#008644",
               900: "#00662F",
            },
            footer: {
               50: "#EAF3FB",
               100: "#D1E2EB",
               200: "#B8CEDA",
               300: "#9DB8C9",
               400: "#88A7B9",
               500: "#7296AB",
               600: "#658699",
               700: "#557181",
               800: "#465D6B",
               900: "#344752",
            },
            base: {
               50: "#F5F5F5",
               100: "#E9E9E9",
               200: "#D9D9D9",
               300: "#C4C4C4",
               400: "#9D9D9D",
               500: "#7B7B7B",
               600: "#555555",
               700: "#434343",
               800: "#262626",
               900: "#000000",
            },
            selected: "#ff7a00",
         },
      },
   },
   plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
export default config;
