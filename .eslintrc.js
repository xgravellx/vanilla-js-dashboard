module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-trailing-spaces": ["error"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-console": ["warn", { "allow": ["warn", "error"] }],
        "no-unused-vars": ["warn"]
    },
};
