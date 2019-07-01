import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1> Customer container </h1>;

  renderCustomerListContainer = () => <h1> Customers list container</h1>;

  renderCustomerNewContainer = () => <h1> Customers new container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;
