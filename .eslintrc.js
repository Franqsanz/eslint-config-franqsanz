module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "prettier"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        // 0 => "off", 1 => "warn", 2 => "error"
        "no-console": 0,
        "func-names": 0,
        "no-unused-vars": 1,
        "no-undef": 0,
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "prettier/prettier": [
            2,
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 80,
            }
        ]
    },
    "plugins": [
        "html",
        "prettier"
    ]
};
