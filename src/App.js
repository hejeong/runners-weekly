import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={ Home } />
      </Router>
     
    </div>
  );
}

export default App;
