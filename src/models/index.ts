/*
 * @Descripttion: models
 * @Author: huangjun
 * @Date: 2021-03-08 10:38:11
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 11:54:01
 */
import {Models} from '@rematch/core';
import {user} from './user';

export interface RootModel extends Models<RootModel> {
  user: typeof user;
}

export const models: RootModel = {user};
