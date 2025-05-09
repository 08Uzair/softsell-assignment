import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        "tc-dark": "#171717",
        "tc-light": "#F8F9FA",
        "tc-primary": "#cbfb45",
        "tc-secondary": "#fff",
        "tc-tertiary": "#232323",

        border: "hsl(var(--border))",
        subHead: "#CBFB45",
        button: "#BDFF00",
        blogBg: "#141313",
        blogBorder: "#232323",
        grayText: "#C4C4C4",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        valorant: ["Valorant", "sans-serif"], // Custom font: Valorant
        montserrat: ["Montserrat", "sans-serif"], // Custom font: Montserrat
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideInUp: {
          "0%": { transform: "translateY(-130%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOutDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(130%)", opacity: "1" },
        },
        slideInDown: {
          "0%": { transform: "translateY(130%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOutUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-130%)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideInUp: "slideInUp 0.8s ease forwards",
        slideOutDown: "slideOutDown 0.8s ease forwards",
        slideInDown: "slideInDown 0.8s ease forwards",
        slideOutUp: "slideOutUp 0.8s ease forwards",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],

  darkMode: "class",
};

export default config;
