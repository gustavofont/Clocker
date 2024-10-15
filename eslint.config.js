import pluginVue from 'eslint-plugin-vue';
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  // "plugin:vue/vue3-essential",
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  // 'eslint:recommended',
  // 'plugin:vue/vue3-recommended',
  {
    files: ["**/*.ts", "**/*.vue"],
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': 'error',
      semi: ["error", "always"],
      'prefer-const': "warn",
      "indent-legacy": ["warn", 2],
    }
  }
];