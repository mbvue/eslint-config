const utils = require('./utils');
const rulesEslint = require('./rules/eslint');
const rulesVue = require('./rules/vue');
const rulesTypescript = require('./rules/typescript');

let config = {
    env: {
        browser: true, //浏览器全局变量
        es6: true, //启用除了 modules 以外的所有 ES6 特性
        node: true, //Node.js 全局变量和 Node.js 作用域
        commonjs: true, //CommonJS 全局变量和 CommonJS 作用域
        jest: true //Jest 全局变量
    },

    extends: ['eslint:recommended'], //官方推荐配置

    parserOptions: {
        ecmaVersion: 11, //ECMAScript 版本
        sourceType: 'module', //指定类型
        parser: 'babel-eslint', //解析器
        ecmaFeatures: {
            jsx: true, //启用 JSX
            globalReturn: false, //不允许在全局作用域下使用 return 语句
            impliedStrict: true, //启用全局 strict mode
            experimentalObjectRestSpread: false //关闭实验性的 object rest/spread properties 支持
        }
    },

    plugins: ['html', 'markdown'],
    overrides: [
        {
            files: ['**/*.{md,mkdn,mdown,markdown}'],
            processor: 'markdown/markdown'
        }
    ],
    rules: rulesEslint
};

// Vue 配置
let vue = utils.hasModule('vue');
if(vue){
    config.extends.push(vue.version.slice(0, 1) === '2' ? 'plugin:vue/recommended' : 'plugin:vue/vue3-recommended');
    config.plugins.push('vue');
    config.rules = Object.assign(config.rules, rulesVue);
}

//Prettier 配置
let prettier = utils.hasModule('prettier');
if(prettier){
    config.extends.push('prettier');
    if(vue) config.extends.push('prettier/vue');
}

//Typescript 配置
let typescript = utils.hasModule('typescript');
if(typescript){
    config.parserOptions.parser = '@typescript-eslint/parser';
    config.plugins.push('@typescript-eslint');

    let exts = ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'];
    if(prettier) exts.push('prettier/@typescript-eslint');
    config.overrides.push({ files: ['*.ts', '*.tsx'], extends: exts, rules: rulesTypescript });
}

module.exports = config;