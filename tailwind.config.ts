/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./component/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],

    prefix:"tw-",

    theme: {
        extend: {},
    },

    plugins: [],
}

