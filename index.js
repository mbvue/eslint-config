module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },

    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/vue"
    ],

    parserOptions: {
        ecmaVersion: 11,
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },

    plugins: ["@typescript-eslint"],

    rules: {
        // eslint-recommended
        "comma-dangle": "error",
        "object-shorthand": "error",
        "semi": "off",
        "no-var": "error",
        "no-debugger": "off",

        // eslint-plugin-vue
        "vue/no-v-html": "off",

        // typescript-eslint
        "@typescript-eslint/no-unused-vars": "error"
    },
};
