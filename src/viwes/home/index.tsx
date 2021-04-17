/*
 * @Descripttion: 首页
 * @Author: huangjun
 * @Date: 2021-03-08 10:29:07
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 14:39:04
 */
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';
import '../../App.css';

export default function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();
  React.useEffect(() => {
    console.log('Home');
  }, []);

  const _logout = () => {
    dispatch.user.logout();
    console.log('out');
  };
  return (
    <div className="container">
      欢迎您，{user?.userName}
      <a href="#!" onClick={_logout}>
        退出
      </a>
    </div>
  );
}
