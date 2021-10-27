import './App.css';
import LoginPage from './pages/login/login-page.js'
import SignUpPage from './pages/signup/signup'
import HomePage from './pages/home/homePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} >
                    <HomePage></HomePage>
                </Route>
                <Route path="/login" exact={true} >
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/signup" exact={true}>
                    <SignUpPage></SignUpPage>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
