/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        background: "hsl(0 0% 4%)", 
        foreground: "hsl(0 0% 98%)",
        card: "hsl(0 0% 8%)",
        "card-foreground": "hsl(0 0% 98%)",
        popover: "hsl(0 0% 4%)",
        "popover-foreground": "hsl(0 0% 98%)",
        primary: "hsl(210 100% 50%)",
        "primary-foreground": "hsl(0 0% 98%)",
        secondary: "hsl(0 0% 15%)",
        "secondary-foreground": "hsl(0 0% 98%)",
        muted: "hsl(0 0% 15%)",
        "muted-foreground": "hsl(0 0% 64%)",
        accent: "hsl(0 0% 15%)",
        "accent-foreground": "hsl(0 0% 98%)",
        destructive: "hsl(0 63% 31%)",
        "destructive-foreground": "hsl(0 0% 98%)",
        border: "hsl(0 0% 15%)",
        input: "hsl(0 0% 15%)",
        ring: "hsl(210 100% 50%)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
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
        "aurora": {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora": 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}