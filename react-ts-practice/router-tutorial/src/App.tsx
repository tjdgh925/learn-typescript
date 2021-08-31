import React from 'react';
import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import './App.css';

const App = () => {
  return (
    // <div>
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path={['/info', '/about']} component={About} />
    // </div>
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles/" component={Profiles} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
