import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './views/main/Main.container';
import Register from './views/register/Register.container';

const routes = (
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/nextpage" component={Register} />
    </div>
  </Router>
);

export default routes;
