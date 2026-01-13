import { defineConfig } from "vite";
import { resolve } from "path";
import path from "path";

export default defineConfig(({ command, mode }) => {
    return {
        root: path.resolve(__dirname, "src"),
        // base: command === "serve" || mode === "preview" ? "/" : "/everyday/",

        base: "./",
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

                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
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
            // open: "/pages/index.html",
            open: true,
            hot: true,
        },
    };
});
