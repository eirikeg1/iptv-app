/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
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
        iptv: {
          primary: "hsl(var(--iptv-primary))",
          secondary: "hsl(var(--iptv-secondary))",
          accent: "hsl(var(--iptv-accent))",
          surface: "hsl(var(--iptv-surface))",
          "surface-variant": "hsl(var(--iptv-surface-variant))",
        },
        "tv-focus": "hsl(var(--tv-focus))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "tv-safe": "48px",
        "tv-focus": "4px",
      },
      fontSize: {
        "tv-xs": ["12px", "16px"],
        "tv-sm": ["14px", "20px"],
        "tv-base": ["16px", "24px"],
        "tv-lg": ["18px", "28px"],
        "tv-xl": ["20px", "28px"],
        "tv-2xl": ["24px", "32px"],
        "tv-3xl": ["30px", "36px"],
      },
    },
  },
  plugins: [],
};