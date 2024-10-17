import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ["src/**/*.ts", "src/**/*.vue"],
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: './tsconfig.app.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': 'error',
      semi: ["error", "always"],
      'prefer-const': "warn",
      "indent-legacy": ["warn", 2],
    }
  }
];