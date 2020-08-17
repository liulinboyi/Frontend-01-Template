# .nycrc
```json
{
  "all": true,
  "include": [
    "src/*.js"
  ],
  "extends": "@istanbuljs/nyc-config-babel"
}
```
# .babelrc
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["babel-plugin-istanbul"]
}
```
