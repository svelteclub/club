import preprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import { readFileSync } from 'fs'

const { version } = JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf8'))

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		defaults: {
			script: 'ts',
			style: 'scss'
		},
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	kit: {
		target: '#svelte',
		vite: {
			define: {
				'import.meta.env.VITE_SVELTE_CLUB_VERSION': JSON.stringify(version)
			}
		}
	}
}

export default config
