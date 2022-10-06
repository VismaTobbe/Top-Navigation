// https://vitejs.dev/config/
import {svelte} from "@sveltejs/vite-plugin-svelte";
import {defineConfig} from "vite";
import svelte_preprocess from "svelte-preprocess";
import dns from "dns";

dns.setDefaultResultOrder("verbatim"); //TA, to allow http://localhost:4000

const production = process.env.APP_ENV === "production";
const sourcemap = !production;
const input = [
    "src/lib/TopNavigation.svelte",
];

export default defineConfig({
    build: {
        minify: production,
        sourcemap,
        lib: {
            entry: production ? "src/main.ts" : "src/main-dev.ts",
            formats: ["es"],
        },
        rollupOptions: {
            input,
            output: {
                format: "es",
                sourcemap,
                entryFileNames: `scripts/[name].js`,
                chunkFileNames: "scripts/chunks/[name]-[hash].js",
                assetFileNames: `assets/[name].[ext]`,
            },
        }
    },
    plugins: [
        svelte({
            experimental: {
                inspector: {
                    // toggleKeyCombo: 'meta-shift',
                    holdMode: true,
                    showToggleButton: 'always',
                    toggleButtonPos: 'bottom-left'
                }
            },
            preprocess: svelte_preprocess({
                // sourceMap: sourcemap,
            }),
            compilerOptions: {
                dev: sourcemap
            }
        })
    ],
    server: {
        port: 4000,
        host: true
    }
});