module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",

    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "^[A-Z]"
            }
        ]

    },
};