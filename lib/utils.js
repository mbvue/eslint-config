const path = require('path');

module.exports = {
    //判断项目是否包含Prettier
    hasPrettier: function () {
        try {
            return require(path.resolve(process.cwd(), './node_modules/prettier'));
        } catch (error) {
            return false;
        }
    },
    
    //判断是否包含Vue
    hasVue: function () {
        try {
            return require(path.resolve(process.cwd(), './node_modules/vue'));
        } catch (error) {
            return false;
        }
    },
    
    //判断是否包含 Typescript
    hasTypescript: function () {
        try {
            return require(path.resolve(process.cwd(), './node_modules/typescript'));
        } catch (error) {
            return false;
        }
    }
};