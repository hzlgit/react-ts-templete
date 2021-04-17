/*
 * @Descripttion: user model
 * @Author: huangjun
 * @Date: 2021-03-08 10:38:17
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 14:06:37
 */

import {createModel} from '@rematch/core';
import {delay} from './utils';
import {RootModel} from '.';

export const user = createModel<RootModel>()({
  state: {
    userName: null,
  },
  reducers: {
    setUserInfo: (state, payload: {}) => ({
      ...state,
      ...payload,
    }),
    logout: (state) => ({
      ...state,
      userName: null,
    }),
  },
  effects: (dispatch) => ({
    async login({userName, password}: {userName: string; password: string}) {
      await delay(1000);
      dispatch.user.setUserInfo({
        userName,
        password,
      });
      return {code: 200};
    },
  }),
});
