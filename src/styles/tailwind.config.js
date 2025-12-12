/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            "pre": {
              borderRadius: "0.75rem",
            },
          },
        },
      },
    },
  },
};
