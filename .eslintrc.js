/*
 * @Descripttion: Eslint配置
 * @Author: huangjun
 * @Date: 2021-03-08 11:27:26
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 11:54:22
 */
module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  overrides: [
    {
      files: ['**/*.ts?(x)'],
    },
  ],
};
