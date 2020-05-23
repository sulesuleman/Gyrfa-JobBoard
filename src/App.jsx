import React from 'react';
import './App.css';
import JobBoard from './jobboard/JobBoard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPage from './detailpage/DetailPage';
import CreateJob from './createjob/CreateJob';
import User from './user/User';
import Header from './header/Header';
import { JobProvider } from './context/JobContext';
import { UserProvider } from './context/UserContext';


function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <UserProvider>
          <JobProvider>
            <Switch>
              <Route path="/" exact component={JobBoard} />
              <Route path="/detail/:id" component={DetailPage} />
              <Route path="/add" component={CreateJob} />
              <Route path="/user" component={User} />
            </Switch>
          </JobProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
