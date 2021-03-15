import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/alertState';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';


function App() {
  return (
    <AlertState>
      <BrowserRouter>
            <Navbar />
          <div className='container pt-5'>
            <Alert alert={{text: 'Test'}}/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/profile/:name' component={Profile}/>
            </Switch>
          </div>
          </BrowserRouter>
    </AlertState>
  
  );
}

export default App;
