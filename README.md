## Vendor
ESLint Config.

Configure js|jsx|ts|tsx|vue|md and prettier

## Installation
```bash
yarn add -D @mbvue/eslint-config
```

## Usage
.eslintrc.js：

```js
module.exports = {
  root: true,
  extends: ['@mbvue/eslint-config']
};

# OR

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
  "extends": ["@mbvue/eslint-config"]
}

# OR

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
    "extends": "@mbvue/eslint-config"
  }
}

# OR

{
  "eslintConfig": {
    "root": true,
    "extends": "@mbvue/eslint-config",
    "rules": {}
  }
}
```
