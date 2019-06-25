import React from 'react';
import Home from './components/Home';
import NoRoute from './components/NoRoute';
import Signup from './components/Signup';
import Login from './components/Login';
import BlogContainer from './components/BlogContainer';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import { NavLink, Switch, Route} from 'react-router-dom';
import ProfileContainer from './components/ProfileContainer';
import CreatePostForm from './components/CreatePostForm';
function App() {
  
  return (
    <div>
        <div className="drawer">
          <div className="company-name">
            <NavLink to="/">
              <p className="company-name1">Runners</p>
              <p className="company-name2">Weekly</p>
            </NavLink>
          </div>
          <Navbar />
        </div>
        <Switch >
          <Route exact path='/' component={ Home }/>
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/login' component={ Login } />
          <Route exact path ='/blog/new' component={ CreatePostForm } />
          <Route exact path ='/blog/:id' component={ BlogPost } />
          <Route exact path ='/blog' component={ BlogContainer } />
          <Route exact path ='/profile/:username' component= { ProfileContainer } />
          <Route component={NoRoute} />
        </Switch>
    </div>
  );
}

export default App;
