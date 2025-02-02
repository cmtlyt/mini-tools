import fs from 'node:fs';
import antfu from '@antfu/eslint-config';
import { createAutoInsert } from 'eslint-plugin-unimport';

export default antfu({
  formatters: true,
  vue: true,
  typescript: true,
  type: 'app',
  ignores: [
    'patches',
    'playgrounds',
    '**/cache',
    '**/dist',
    '**/.temp',
    '**/*.svg',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
}, createAutoInsert({
  imports: JSON.parse(fs.readFileSync('./auto-imports.json', 'utf-8')),
}));
