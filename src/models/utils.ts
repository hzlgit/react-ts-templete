/*
 * @Descripttion:
 * @Author: huangjun
 * @Date: 2021-03-08 10:38:37
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 10:38:50
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
