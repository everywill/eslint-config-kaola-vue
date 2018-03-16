# eslint-config-kaola-vue

[![Build Status](https://travis-ci.org/everywill/eslint-config-kaola-vue.svg?style=flat-square)](https://travis-ci.org/everywill/eslint-config-kaola-vue)

## Install

```
$ npm install --save-dev eslint-config-kaola-vue eslint-plugin-vue
```


## Usage

Add some ESLint config to your package.json:

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": ["kaola/esnext", "kaola-vue"]
    }
}
```

Or to .eslintrc:

```json
{
    "extends": ["kaola/esnext", "kaola-vue"]
}
```

## Tips
1. If you already use other parser (e.g. `"parser": "babel-eslint"`), please move it into `parserOptions`, so it doesn't collide with the `vue-eslint-parser`:

```diff
- "parser": "babel-eslint",
  "parserOptions": {
+     "parser": "babel-eslint",
      "ecmaVersion": 2017,
      "sourceType": "module"
  }
```
2. Make sure you don't have `eslint-plugin-html` in your config. The `eslint-plugin-html` extracts the content from `<script>` tags, but `eslint-vue-plugin` requires `<script>` tags and `<template>` tags in order to distinguish template and script in single file components:

```diff
"plugins": [
-   "html"
]
```
3.Make sure your tool is set to lint .vue files.VSCode targets only JavaScript or HTML files by default. You have to add {"autoFix": true, "language": "vue"} into eslint.validate entry.
## Related

- [eslint-config-kaola](https://github.com/kaola-fed/eslint-config-kaola) - ESLint shareable config for Kaola
- [Kaola-fed](https://github.com/kaola-fed)
