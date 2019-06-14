import React from 'react';
import Home from './components/Home';
import NoRoute from './components/NoRoute';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      
        <Navbar />
        <Switch >
          <Route exact path='/' component={ Home }/>
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/login' component={ Login } />
          <Route component={NoRoute} />
        </Switch>
      
    </div>
  );
}

export default App;
