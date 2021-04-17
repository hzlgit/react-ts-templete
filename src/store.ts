/*
 * @Descripttion: store
 * @Author: huangjun
 * @Date: 2021-03-08 10:37:41
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 12:15:25
 */
import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import {models, RootModel} from './models';

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()],
});
type FullModel = ExtraModelsFromLoading<RootModel>;
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
