import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SidebarComponents from './components/layout/SidebarComponent';
import Homepage from './components/Homepage';
import BasicPortfolio from './components/BasicPortfolio';
import Footer from './components/layout/Footer';

const routes = [{
  path: '/basicPortfolio',
  component: BasicPortfolio
}, {
  path: '/homePage',
  component: Homepage
}]

function App() {
  const routeComponents = routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);
  return (
    <Router>
      <SidebarComponents />
      <Switch>{routeComponents}</Switch>
      <Footer />
    </Router>
  );
}

export default App;
