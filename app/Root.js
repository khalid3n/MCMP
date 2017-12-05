import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './login/Login.view';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
    </Router>
  );
};

export default Root;

