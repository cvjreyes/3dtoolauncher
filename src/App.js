import './App.css';
import { Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./pages/main"
import Admin from "./pages/admin"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path={"/"} component={Main}></Route>
            <Route exact path={"/admin"} component={Admin}></Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
