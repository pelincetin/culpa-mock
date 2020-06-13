import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Review from './pages/Review';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/review" component={ Review } />
        <Route component={ NoMatch } />
      </Switch>
    </Router>
  </div>
  );
}
export default App;