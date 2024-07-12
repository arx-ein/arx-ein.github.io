/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'code::before': {
                            content: '',
                        },
                        'code::after': {
                            content: '',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
