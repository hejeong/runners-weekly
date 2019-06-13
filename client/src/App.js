import React from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={ Home } />
        <Route path="/signup" component={ Signup } />
        <Route path="/login" component={ Login } />
      </Router>
    </div>
  );
}

export default App;
