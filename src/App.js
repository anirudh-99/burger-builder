import React, { Component } from 'react';
import { Route, Switch,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

//this is the main component
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }


  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/logout" component={Logout}/>
          </Switch>
        </Layout>
      </div>

    );

  }
}



const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(null,mapDispatchToProps)(App));
