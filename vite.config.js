import {defineConfig} from "vite"
import {resolve} from "path"

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(_dirname, 'index.html'),
				achilles: resolve(_dirname, 'achilles.html')
			}
		}
	}
})
