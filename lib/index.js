const utils = require('./utils');

let config = {
    env: {
        browser: true, //浏览器全局变量
        es6: true, //启用除了 modules 以外的所有 ES6 特性
        node: true, //Node.js 全局变量和 Node.js 作用域
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

    plugins: ['markdown'],

    rules: {
        // eslint-recommended
        'semi': 'off', //禁止使用分号代替ASI
        'no-var': 'error', //要求使用 let 或 const 而不是 var
        'comma-dangle': 'error', //禁止末尾逗号
    }
};

// Vue 配置
let vue = utils.hasVue();
if(vue){
    if(vue.version.slice(0,1) === '2'){
        config.extends.push('plugin:vue/recommended');
    }else{
        config.extends.push('plugin:vue/vue3-recommended');
    }
    config.plugins.push('vue');
}

//Prettier 配置
if(utils.hasPrettier()){
    config.extends.push('prettier');

    if(vue){
        config.extends.push('prettier/vue');
    }
}

//Typescript 配置
if(utils.hasTypescript()){
    config.extends.push('plugin:@typescript-eslint/eslint-recommended');
    config.extends.push('plugin:@typescript-eslint/recommended');

    config.plugins.push('@typescript-eslint');
    config.parserOptions.parser = '@typescript-eslint/parser';
}

module.exports = config;