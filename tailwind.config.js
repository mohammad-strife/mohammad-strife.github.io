/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  daisyui: {
    themes: ["light"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "850px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1150px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1222px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        "3xl": "-4px 8px 74.3px 0px rgba(0, 0, 0, 0.19)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        bgNav: "rgba(30, 181, 255, 1)",
        btnOrange: "rgba(255, 171, 22, 1)",
        btnApp: "rgba(255, 143, 0, 1)",
        otp: "rgba(0, 125, 240, 1)",
        shadowInputs: "rgba(6, 152, 255, 1)",
        inputBorder: "rgba(121, 121, 121, 1)",
        clock: "rgba(255, 143, 0, 1)",
        footer: "rgba(14, 69, 58, 1)",
        profile_card: "rgba(3, 201, 201, 1)",
        bgTicket: "rgba(157, 218, 249, 1)",
        inputTicket: "rgba(183, 183, 183, 1)",
        detailsTicket: "rgba(8, 101, 197, 1)",
        ticketState: "rgba(255, 245, 0, 1)",
        notif: "rgba(6, 152, 255, 1)",
        arrow: "rgba(6, 152, 255, 1)",
        bgFilter: "rgba(0, 160, 163, 1)",
        hoverMenu: "rgba(157, 218, 249, 1)",
        greenBlack: "rgba(4, 124, 129, 1)",
        MyArticles: "rgba(4, 124, 129, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
