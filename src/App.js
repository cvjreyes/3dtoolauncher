import './App.css';
import { Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./pages/main"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path={"/"} component={Main}></Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
