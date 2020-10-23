## Vendor
ESLint Config.

Configure js|jsx|ts|tsx|vue and prettier

## Installation
```bash
yarn add -D @mbvue/eslint-config
```

## Usage
.eslintrc.js：

```js
module.exports = {
  extends: ['@mbvue/eslint-config']
};

# OR

module.exports = {
  extends: ['@mbvue/eslint-config'],
  rules: {}
};
```

OR

.eslintrc.json：

```json
{
  "extends": ["@mbvue/eslint-config"]
}

# OR

{
  "extends": ["@mbvue/eslint-config"],
  "rules": {}
}
```

OR

package.json：

```json
{
  "eslintConfig": {
    "extends": "@mbvue/eslint-config"
  }
}

# OR

{
  "eslintConfig": {
    "extends": "@mbvue/eslint-config",
    "rules": {}
  }
}
```
