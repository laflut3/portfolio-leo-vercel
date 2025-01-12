import {Config} from 'tailwindcss/types';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                aquire: ['Aquire', 'sans-serif'],
                space: ['Space', 'sans-serif'],
            },
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                '.bg-primary': {
                    backgroundColor: 'var(--bg-primary)',
                },
                '.bg-secondary': {
                    backgroundColor: 'var(--bg-secondary)',
                },
                '.bg-tertiary': {
                    backgroundColor: 'var(--bg-tertiary)',
                },
                '.text-primary': {
                    color: 'var(--color-primary)',
                },
                '.text-tertiary': {
                    color: 'var(--color-tertiary)',
                },
                '.text-secondary': {
                    color: 'var(--color-secondary)',
                },

                '.border-primary': {
                    borderColor: 'var(--border-primary)',
                },
                '.border-secondary': {
                    borderColor: 'var(--border-secondary)',
                },
                '.border-tertiary': {
                    borderColor: 'var(--border-tertiary)',
                },

                '.text-stroke': {
                    '-webkit-text-stroke': '.5px #000',
                },
            });
        }),
    ],
};

export default config;
