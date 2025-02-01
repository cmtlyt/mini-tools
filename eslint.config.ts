import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: true,
  vue: true,
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
});
