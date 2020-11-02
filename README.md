## Description
Support .js、.jsx、.ts、.tsx、.vue、.md、prettier

## Installation
```bash
npm install --save-dev @mbvue/eslint-config
#OR
yarn add -D @mbvue/eslint-config
```

## Usage
.eslintrc.js：

```js
module.exports = {
  root: true,
  extends: ['@mbvue/eslint-config'],
  rules: {}
};
```

OR

.eslintrc.json：

```json
{
  "root": true,
  "extends": ["@mbvue/eslint-config"],
  "rules": {}
}
```

OR

package.json：

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@mbvue/eslint-config",
    "rules": {}
  }
}
```
