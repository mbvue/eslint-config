module.exports = {
    env: {
        browser: true, //浏览器环境中的全局变量
        es6: true, //启用除了 modules 以外的所有 ECMAScript 6 特性
        node: true, //Node.js 全局变量和 Node.js 作用域
        jest: true //Jest 全局变量
    },

    extends: [
        'eslint:recommended', //Eslint 推荐配置
        'plugin:vue/vue-recommended', //Vue2 推荐配置（vue3不支持 template）
        'plugin:@typescript-eslint/eslint-recommended', //Typescript Eslint 推荐配置
        'plugin:@typescript-eslint/recommended', //Typescript 推荐配置
        'prettier', //Prettier 配置
        'prettier/vue' //Prettier Vue 兼容配置
    ],

    parserOptions: {
        ecmaVersion: 11, //JavaScript 版本
        parser: '@typescript-eslint/parser', //解析器
        sourceType: 'module' //指定类型
    },

    plugins: ['@typescript-eslint'],

    overrides: [
        {
            files: ['**/*.js', '**/*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off' //关闭 js|jsx 中 no-var-requires 提示
            }
        }
    ],

    rules: {
        // eslint-recommended
        'comma-dangle': 'error', //禁止末尾逗号
        'object-shorthand': 'error', //禁止对象字面量中方法和属性使用简写语法
        'semi': 'off', //禁止使用分号代替ASI
        'no-var': 'error', //要求使用 let 或 const 而不是 var
        'no-debugger': 'off', //开启 debugger 调试

        // eslint-plugin-vue
        'vue/html-indent': 'off', //禁止代码缩进
        'vue/no-v-html': 'off', //开启 v-html
        'vue/html-self-closing': 'off', //关闭自动闭合符号
        'vue/require-v-for-key': 'off', //开启 v-for 使用 :key
        'vue/require-default-prop': 'off', //关闭 required 初始赋值

        // typescript-eslint
        '@typescript-eslint/no-unused-vars': 'error' // 禁止使用未使用的变量
    },
};
