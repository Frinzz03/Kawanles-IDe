import { defineConfig } from "@neon/config/v1";

export default defineConfig({
  // Layanan Neon yang digunakan Web Modul Ajar
  auth: true,
  functions: {
    hello: { name: "Hello World", source: "./hello.ts" },
    api: { name: "Web Modul Ajar API", source: "./functions/api.ts" },
  },
  buckets: {
    // Bucket privat untuk gambar materi, PDF modul, dan audio (diakses via presigned URL)
    assets: { access: "private" },
  },
  branch: (branch) => {
    if (branch.isDefault) {
      return {};
    }
    if (!branch.exists) {
      return { ttl: "7d" };
    }
    return {};
  },
});
