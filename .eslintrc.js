{
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "es6": true
        }
    },
    "plugins": [
        "import"
    ],
    "globals": {
        "Materialize": true,
        "window": true,
        "location": true,
        "localStorage": true,
        "expect": true,
        "jest": true,
        "document": true
    },
    "root": true,
    "extends": "airbnb-base",
    "extends": "rallycoding",
    "env": {
        "node": true,
        "es6": true,
        "mocha": true,
        "jquery": true
    },
    "rules": {
        "max-len": [
            "error",
            80,
            {
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],
        "one-var": 0,
        "arrow-body-style": [
            "error",
            "always"
        ],
        "import/no-unresolved": [
            2,
            {
                "commonjs": true
            }
        ],
        "no-shadow": [
            "error",
            {
                "allow": [
                    "req",
                    "res",
                    "err"
                ]
            }
        ],
        "valid-jsdoc": 0,
        "require-jsdoc": 0
    }
}