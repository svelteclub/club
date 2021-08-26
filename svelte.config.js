import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: {
            plugins: [autoprefixer]
        }
    }),
    kit: {
        target: '#svelte'
    }
};

export default config;
