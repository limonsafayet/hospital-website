import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import { NotFound } from 'http-errors';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
