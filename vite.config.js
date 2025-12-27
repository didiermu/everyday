// import { defineConfig } from "vite";
//
// export default defineConfig({
//     build: {
//         rollupOptions: {
//             output: {
//                 manualChunks: {
//                     vendor: ["three"],
//                 },
//             },
//         },
//         chunkSizeWarningLimit: 1000,
//     },
// });

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    // root: path.resolve(__dirname, "src"),
    base: "./",
    publicDir: path.resolve(__dirname, "public"),
    build: {
        outDir: path.resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "index.html"),
            },
            output: {
                manualChunks: {
                    vendor: ["three"],
                },
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",

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
        chunkSizeWarningLimit: 1000,
    },

    server: {
        hot: true,
        open: true,
    },
});
