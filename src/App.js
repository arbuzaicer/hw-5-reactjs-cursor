import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import styled from 'styled-components';

const Section = styled.div`
  background: linear-gradient(to right, #0f1112, #252729);
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const routesData = routes.map((route, index) => (
    <Route key={route.path+index} path={route.path} exact={route.exact} component={route.component} />
  ));

  return (
    <>
      <Section>
        <Switch>{routesData}</Switch>
      </Section>
    </>
  );
};

export default App;
