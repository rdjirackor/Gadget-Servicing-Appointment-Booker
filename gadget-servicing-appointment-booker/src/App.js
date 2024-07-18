import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage'; // Adjusted import statement

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} /> {/* Adjusted component name */}
          {/* Add more routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
