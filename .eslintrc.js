module.exports = {
    "extends":["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    "rules": {
        "max-len": [1, 70, 2, {ignoreComments: true}],
        "prop-types": [2]
      }
};
