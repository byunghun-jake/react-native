module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: [2, "double"],
    semi: [2, "never"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        endOfLine: "auto",
        semi: false,
        tabWidth: 2,
        trailingComma: "es5",
        bracketSpacing: true,
      },
    ],
  },
}
