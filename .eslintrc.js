module.exports = {
  "plugins": [
    "graphql",
    "prettier"
  ],
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "parser": "babel-eslint",
  "env": {
    "jest": true
  },
  "rules": {
    "prettier/prettier": ["error"],
  },
  "globals": {
    "fetch": false
  }
};
