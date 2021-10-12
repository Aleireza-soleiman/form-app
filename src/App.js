import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
//components
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
