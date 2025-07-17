module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native", "react-hooks"],
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
    "react-native/sort-styles": "off",
    "@typescript-eslint/no-require-imports": [
      "error",
      {
        allow: ["\\.(ttf|otf|woff|woff2|png|jpg|jpeg|gif|svg)$"],
      },
    ],
    "react-native/no-raw-text": [
      "error",
      {
        skip: [
          "T1",
          "T2",
          "T3",
          "H1",
          "H2",
          "HL1",
          "HL2",
          "BN1",
          "BR1",
          "BN2",
          "BR2",
          "LN1",
          "LR1",
          "L2",
          "C1",
          "C2",
          "ThemedText",
          "SlideHeaderMeasurement",
        ],
      },
    ],
    "react-native/no-inline-styles": [
      "error",
      {
        "allow": ["CustomButton"]
      }
    ]
  },
};
