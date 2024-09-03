import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "summerSale": "url('/img/summer-sale.jpg')",
        "breadcrumb": "url('/img/breadcrumb.jpg')",
        "slider1": "url('/img/slider1.jpg')",
        "slider2": "url('/img/slider2.jpg')",
        'custom-gradient': 'radial-gradient(circle farthest-corner at 32% 106%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
