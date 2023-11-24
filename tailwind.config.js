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
                    primary: '#9b15f4',
                    secondary: '#bbd0ff',
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#9b15f4',
                    secondary: '#bbd0ff',
                },
            },
        ],
    },
}
