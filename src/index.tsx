/*
 * @Descripttion: 入口
 * @Author: huangjun
 * @Date: 2021-03-08 10:29:07
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 16:09:12
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './route';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);

reportWebVitals();
