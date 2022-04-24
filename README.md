## Get started

1. install eslint and setup eslint.

    ```
    npm i -D eslint
    ```

    ```
    npx eslint --init
    ```

2. Now you want to extend eslint capabilities by installing a plugin (xo or Airbnb, ect..).

    ```
    npm install -D eslint-config-xo
    ```

3. Go to `.eslintrc` file and add in `extends` your plugin of choice.

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "xo"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // override xo rules here !
    }
}
```



