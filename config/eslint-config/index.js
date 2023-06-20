module.exports = {
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    rules: {
      'import/no-unresolved': 0,
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx']
        }
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
          endOfLine: 'auto'
        }
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'import/extensions': ['error', 'never'],
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'react/function-component-definition': 'off',
      'react/no-array-index-key': 'off'
    },
    ignorePatterns: ['.eslintrc.js', '*.config.js', '*.stories.tsx', 'dist/**', '*.spec.tsx'],
    overrides: [
      {
        files: ['src/**/*.ts', 'src/**/*.tsx', 'types/**/*.d.ts'],
        rules: {
          // Add specific rules for the included files if needed
        }
      }
    ]
  };
  