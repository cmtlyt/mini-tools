import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rsbuild/core';
import { pluginVue as vue } from '@rsbuild/plugin-vue';
import autoImport from 'unplugin-auto-import/rspack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
  ],
  output: {
    assetPrefix: '/mini-tools/',
  },
  html: {
    template: path.resolve(__dirname, './index.html'),
  },
  source: {
    entry: {
      index: {
        import: path.resolve(__dirname, './src/main.ts'),
        html: true,
      },
    },
  },
  // 设置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  tools: {
    rspack: {
      plugins: [
        autoImport({
          dumpUnimportItems: './auto-imports.json',
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
          ],
          imports: [
            'vue',
            '@vueuse/core',
          ],
          dts: './src/auto-imports.d.ts',
        }),
      ],
    },
  },
});
