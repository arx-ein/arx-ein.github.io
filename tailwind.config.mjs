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
            },
        },
    },
};
