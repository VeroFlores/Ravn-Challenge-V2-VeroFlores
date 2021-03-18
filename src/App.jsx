import React from 'react';
import { Router } from '@reach/router';
import GlobalStyles from './styles/GlobalStyles';
import People from './components/People/index';
import Detail from './components/Detail/index';

const App = () => {
  console.log('app');
  return (
    <>
      <GlobalStyles />
      <section>

        <Router>
          <People path="/" />
          <Detail path="/detail/:id" />
        </Router>
      </section>

    </>
  );
};
export default App;
