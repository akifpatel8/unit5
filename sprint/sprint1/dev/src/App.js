import './App.css';
import { Home } from './components/Home';
import {Route,Switch} from "react-router-dom"
import { LoginInput } from './components/LoginInput';

function App() {
  return (
    <div className="App">
      <Home/>
    <Switch>
      <Route exact path="/">home</Route>
      <Route path="/login"><LoginInput/></Route>
      <Route path="/signup">Signup</Route>
    </Switch>
    </div>
  );
}

export default App;
