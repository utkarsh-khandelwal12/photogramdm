import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chats from './Chat';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  const[{user}, dispatch]=useStateValue();
   
  return (
    <div className="App">
      {!user?(
        <Login/>
      ):(
        <div className="app__body">
        <Router>
          <Sidebar/>
            <Switch>
             <Route path="/rooms/:roomId">
                <Chats/>
              </Route>
              <Route path='/'>
                <Chats/>
              </Route>
            </Switch>
       </Router>
      </div>
    )}
    </div>
  );
}

export default App;