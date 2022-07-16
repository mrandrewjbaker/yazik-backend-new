module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  globals: {
    app: 'readonly',
    express: 'readonly',
    logger: 'readonly',
    config: 'readonly',
    env: 'readonly',
    createError: 'readonly',
    bcrypt: 'readonly',
    it: 'readonly',
    supertest: 'readonly',
    before: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    authenticatedUser: 'readonly',
    unauthenticatedUser: 'readonly',
    _: 'readonly',
    upsertError: 'readonly',
    deleteSuccess: 'readonly',
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      globalReturn: true,
    },
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  // add your custom rules here
  rules: {
    // no single line if statements
    "no-restricted-syntax": ["error", "IfStatement > :not(BlockStatement).consequent"],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    // stop whining about line breaks
    'linebreak-style': 0,
    camelcase: 0,
    'max-len': [2, { code: 150 }],
    'no-param-reassign': [1, { props: false }],
    'import/no-unresolved': [2, { caseSensitive: true }],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/naming-convention': [
      "error",
      {
        "selector": "class",
        "format": ["snake_case", "PascalCase"],
      },
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
