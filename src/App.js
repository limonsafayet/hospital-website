import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';

import Layout from './layout/Layout';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './pages/Service/Service';
import Doctors from "./pages/Doctors/Doctors";
import ContactUs from "./pages/ContactUs/ContactUs";
import NotFound from "./pages/NotFound/NotFound"
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/doctors" exact>
                <Doctors></Doctors>
              </Route>
              <Route path="/contact-us" exact>
                <ContactUs></ContactUs>
              </Route>
              <Route path="/login" exact>
                <Login></Login>
              </Route>
              <PrivateRoute path="/service/:slug" exact component={Service} />
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
