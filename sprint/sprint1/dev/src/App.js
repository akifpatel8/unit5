import './App.css';
import { Home } from './components/Home';
import {Route,Switch} from "react-router-dom"
import { LoginInput } from './components/LoginInput';
import {SignupInput} from "./components/SignupInput"
function App() {
  return (
    <div className="App">
      <Home/>
    <Switch>
      <Route exact path="/">home</Route>
      <Route path="/login"><LoginInput/></Route>
      <Route path="/signup"><SignupInput/></Route>
    </Switch>
    </div>
  );
}

export default App;
