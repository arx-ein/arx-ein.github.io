const colors = require('tailwindcss/colors');
const myColor = {
    "heading": {
        DEFAULT: colors.lime[600],
        "dark": colors.green[500]
    },
}
/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h5: {
                            color: "var(--tw-prose-headings)",
                            fontWeight: "500",
                        },
                        "h5 strong": {
                            fontWeight: "600",
                            color: "inherit",
                        },
                        h6: {
                            color: "var(--tw-prose-headings)",
                            fontWeight: "500",
                        },
                        "h6 strong": {
                            fontWeight: "600",
                            color: "inherit",
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                    },
                },
                hyphae: {
                    css: {
                        "--tw-prose-body": colors.inherit,
                        "--tw-prose-headings": myColor.heading.DEFAULT,
                        "--tw-prose-lead": colors.zinc[600],
                        "--tw-prose-links": colors.zinc[900],
                        "--tw-prose-bold": colors.zinc[900],
                        "--tw-prose-counters": colors.zinc[500],
                        "--tw-prose-bullets": colors.zinc[300],
                        "--tw-prose-hr": colors.zinc[200],
                        "--tw-prose-quotes": colors.zinc[900],
                        "--tw-prose-quote-borders": colors.zinc[200],
                        "--tw-prose-captions": colors.zinc[500],
                        "--tw-prose-kbd": colors.zinc[900],
                        "--tw-prose-kbd-shadows": colors.zinc[900],
                        "--tw-prose-code": colors.zinc[900],
                        "--tw-prose-pre-code": colors.zinc[200],
                        "--tw-prose-pre-bg": colors.zinc[800],
                        "--tw-prose-th-borders": colors.zinc[300],
                        "--tw-prose-td-borders": colors.zinc[200],
                        "--tw-prose-invert-body": colors.inherit,
                        "--tw-prose-invert-headings": myColor.heading.dark,
                        "--tw-prose-invert-lead": colors.zinc[400],
                        "--tw-prose-invert-links": colors.white,
                        "--tw-prose-invert-bold": colors.white,
                        "--tw-prose-invert-counters": colors.zinc[400],
                        "--tw-prose-invert-bullets": colors.zinc[600],
                        "--tw-prose-invert-hr": colors.zinc[700],
                        "--tw-prose-invert-quotes": colors.zinc[100],
                        "--tw-prose-invert-quote-borders": colors.zinc[700],
                        "--tw-prose-invert-captions": colors.zinc[400],
                        "--tw-prose-invert-kbd": colors.white,
                        "--tw-prose-invert-kbd-shadows": colors.white,
                        "--tw-prose-invert-code": colors.white,
                        "--tw-prose-invert-pre-code": colors.zinc[300],
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders": colors.zinc[600],
                        "--tw-prose-invert-td-borders": colors.zinc[700],
                    },
                },
            },
        },
    },
};
