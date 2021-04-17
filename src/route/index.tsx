/*
 * @Descripttion: 路由配置
 * @Author: huangjun
 * @Date: 2021-03-08 11:58:10
 * @LastEditors: huangjun
 * @LastEditTime: 2021-03-08 15:01:33
 */
import * as React from 'react';
import {useSelector} from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import Login from '../viwes/login';
import Home from '../viwes/home';
import {RootState} from '../store';

export default function App() {
  const routes = [
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录',
      },
    },
    {
      path: '/',
      component: Home,
      meta: {
        title: '欢迎',
        needLogin: true,
      },
    },
  ];
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          if (route.meta?.needLogin) {
            return (
              <PrivateRoute
                key={index}
                path={route.path}
                title={route.meta?.title}>
                <route.component></route.component>
              </PrivateRoute>
            );
          }
          return (
            <Route
              key={index}
              path={route.path}
              render={() => {
                document.title = route.meta.title;
                return <route.component></route.component>;
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

interface PrivateRouteProps extends RouteProps {
  title?: string;
}
// 登录拦截
function PrivateRoute({title, children, ...rest}: PrivateRouteProps) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Route
      {...rest}
      render={({location}) => {
        if (title) {
          document.title = title;
        }
        return user?.userName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        );
      }}
    />
  );
}
