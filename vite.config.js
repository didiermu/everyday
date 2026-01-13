import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command }) => {
    return {
        root: path.resolve(__dirname, "src"),

        // 👇 CLAVE PARA GITHUB PAGES
        base: command === "serve" ? "/" : "/everyday/",

        publicDir: path.resolve(__dirname, "public"),

        build: {
            outDir: path.resolve(__dirname, "docs"),
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, "src/index.html"),
                },
                output: {
                    chunkFileNames: "js/[name]-[hash].js",
                    entryFileNames: "js/[name]-[hash].js",
                    manualChunks: {
                        three: ["three"],
                    },
                    assetFileNames: ({ name }) => {
                        if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                            return "img/[name]-[hash][extname]";
                        }
                        if (/\.css$/.test(name ?? "")) {
                            return "css/[name]-[hash][extname]";
                        }
                        return "assets/[name]-[hash][extname]";
                    },
                },
            },
        },

        resolve: {
            alias: {
                "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
                "@locomotive": path.resolve(
                    __dirname,
                    "node_modules/locomotive-scroll"
                ),
            },
        },

        server: {
            open: true,
            hot: true,
        },
    };
});
