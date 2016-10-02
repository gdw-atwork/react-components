module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "commonjs": true,
        "browser": true
    },
    "extends": ["standard","standard-react"],
    "parserOptions": {
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "indent": ["error", 4],
        "max-len": ["error", 120, 2],
        "generator-star-spacing": 0
    }
};
