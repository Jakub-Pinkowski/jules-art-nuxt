/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#c8b6ff',
                    secondary: '#bbd0ff',
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#c8b6ff',
                    secondary: '#bbd0ff',
                },
            },
        ],
    },
}
