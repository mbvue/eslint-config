## Vendor
ESLint Config.

configure js|jsx|ts|tsx|vue and prettier

## Installation
yarn add -D @mbvue/eslint-config

## Usage
.eslintrc.js：

module.exports = {
  extends: ["@mbvue/eslint-config"],
  rules: {}
};

or

.eslintrc.json：

or

{
  "extends": ["@mbvue/eslint-config"],
  "rules": {}
}

or

package.json：

{
  "eslintConfig": {
    "extends": "@mbvue/eslint-config",
    "rules": {}
  }
}
