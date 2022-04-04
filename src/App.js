import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Student from './Pages/Home/Student/Student';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/allstudent">
          <Student></Student>
        </Route>
      </Switch>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
