import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rsbuild/core';
import { pluginVue as vue } from '@rsbuild/plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  // 设置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
