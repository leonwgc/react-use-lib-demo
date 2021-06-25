import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { Provider, configureStore } from 'simple-redux-store';
import routes from './RouteConfig';
import { Spin } from 'antd';
import './App.less';

const Routes = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Suspense fallback={<Spin />}>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route render={() => <div>page not found</div>} />
            </Switch>
          </Suspense>
        </Router>
      </ConfigProvider>
    </Provider>
  );
};

export default Routes;
