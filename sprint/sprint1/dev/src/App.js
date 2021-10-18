import './App.css';
import { Home } from './components/Home';
import {Route,Switch} from "react-router-dom"
import { LoginInput } from './components/LoginInput';
import {SignupInput} from "./components/SignupInput"
import { Categories } from './components/Categories';
import { Home2 } from './components/Home2';
function App() {
  return (
    <div className="App">
      <Home/>
    <Switch>
      <Route exact path="/"><Home2/></Route>
      <Route exact path="/login"><LoginInput/></Route>
      <Route path="/signup"><SignupInput/></Route>
      <Route path="/login/categories"><Categories/></Route>
      <Route>404 not found</Route>
    </Switch>
    </div>
  );
}

export default App;
