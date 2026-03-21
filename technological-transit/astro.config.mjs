// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    base: '/',
    //trailingSlash: 'always',
    output: 'static', 

    vite: {
        ssr: {
        external: []
        }
    },

    site: 'https://sedna16.github.io', // e.g., 'https://johndoe.github.io'
    base: '/jan-alvin-dimla-portfolio', // e.g., '/my-website-repo'

});
