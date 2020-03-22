import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Users from './containers/Users/Users';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/" component={Auth} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
