const colors = require("tailwindcss/colors");
const { toRGB, withOpacityValue } = require("@left4code/tw-starter/dist/js/tailwind-config-helper");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@left4code/tw-starter/**/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
        128: "28rem",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
      colors: {
        rgb: toRGB({
          inherit: colors.inherit,
          current: colors.current,
          transparent: colors.transparent,
          black: colors.black,
          white: colors.white,
          slate: colors.slate,
          gray: colors.gray,
          zinc: colors.zinc,
          neutral: colors.neutral,
          stone: colors.stone,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          sky: colors.sky,
          stone: colors.stone,
          neutral: colors.neutral,
          gray: colors.gray,
          slate: colors.slate,
        }),
        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),
        success: withOpacityValue("--color-success"),
        info: withOpacityValue("--color-info"),
        warning: withOpacityValue("--color-warning"),
        pending: withOpacityValue("--color-pending"),
        danger: withOpacityValue("--color-danger"),
        light: withOpacityValue("--color-light"),
        dark: withOpacityValue("--color-dark"),
        slate: {
          50: withOpacityValue("--color-slate-50"),
          100: withOpacityValue("--color-slate-100"),
          200: withOpacityValue("--color-slate-200"),
          300: withOpacityValue("--color-slate-300"),
          400: withOpacityValue("--color-slate-400"),
          500: withOpacityValue("--color-slate-500"),
          600: withOpacityValue("--color-slate-600"),
          700: withOpacityValue("--color-slate-700"),
          800: withOpacityValue("--color-slate-800"),
          900: withOpacityValue("--color-slate-900"),
        },
        darkmode: {
          50: withOpacityValue("--color-darkmode-50"),
          100: withOpacityValue("--color-darkmode-100"),
          200: withOpacityValue("--color-darkmode-200"),
          300: withOpacityValue("--color-darkmode-300"),
          400: withOpacityValue("--color-darkmode-400"),
          500: withOpacityValue("--color-darkmode-500"),
          600: withOpacityValue("--color-darkmode-600"),
          700: withOpacityValue("--color-darkmode-700"),
          800: withOpacityValue("--color-darkmode-800"),
          900: withOpacityValue("--color-darkmode-900"),
        },
      },
    },
  },
  plugins: [],
};
