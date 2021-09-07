import './App.css';
import Login from './pages/login/login-page'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" exact={true} >
            <Login></Login>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
