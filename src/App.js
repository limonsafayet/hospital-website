import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import { NotFound } from 'http-errors';
import Login from './pages/Login/Login/Login';

import Layout from './layout/Layout';
import AuthProvider from './contexts/AuthProvider';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Home></Home>
              </Route>
              <Route path="/login" exact>
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
