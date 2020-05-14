module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        paths: ['src'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'spaced-comment': 'off',
    indent: 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/newline-after-import': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-cycle': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/extensions': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
