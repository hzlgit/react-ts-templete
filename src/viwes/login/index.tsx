/*
 * @Descripttion: 登录
 * @Author: huangjun
 * @Date: 2021-03-08 12:01:13
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 15:02:44
 */

import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import {RootState, Dispatch} from '../../store';
import InputCell from '../../components/InputCell';

export default function Login() {
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<Dispatch>();
  const [userName, setUserName] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  React.useEffect(() => {
    console.log('Login');
  }, []);

  const history = useHistory();
  const location = useLocation<any>();
  // 登录
  const _login = async () => {
    if (!userName || !pwd) {
      return;
    }
    const res = await dispatch.user.login({userName, password: pwd});
    let {from} = location.state || {from: {pathname: '/'}};
    if (res.code === 200) {
      history.replace(from);
    }
  };
  return (
    <>
      <div className="container">
        <div style={{width: '300px'}}>
          <InputCell
            placeholder="请输入用户名"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <InputCell
            placeholder="请输入密码"
            value={pwd}
            type="password"
            onChange={(event) => setPwd(event.target.value)}
          />
        </div>
        <button
          style={{
            width: '300px',
            height: '50px',
            borderRadius: '6px',
            textAlign: 'center',
            lineHeight: '50px',
            color: 'white',
            fontSize: '16px',
            backgroundColor: '#3C7ECE ',
            borderWidth: 0,
            borderColor: 'red',
            marginTop: '30px',
          }}
          onClick={_login}>
          登录
        </button>
      </div>
      {loading.effects.user.login && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 99,
          }}>
          <div
            style={{padding: '20px', color: '#999', backgroundColor: 'white'}}>
            加载中...
          </div>
        </div>
      )}
    </>
  );
}
