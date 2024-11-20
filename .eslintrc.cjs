module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Рекомендации для TypeScript
    "standard",
    "prettier", // Prettier должен быть последним
  ],
  parser: "@typescript-eslint/parser", // Используем TypeScript парсер
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint", // Поддержка TypeScript
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error"], // Проверка неиспользуемых переменных в TS
    "@typescript-eslint/no-explicit-any": "warn", // Предупреждение при использовании `any`
    "@typescript-eslint/explicit-module-boundary-types": "off", // Отключение необходимости явно указывать типы функций
  },
};
