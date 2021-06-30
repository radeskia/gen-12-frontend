// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/loginForm.css";
import "../assets/styles/routeHeader.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Nav from "../components/widgets/navmenu/nav"
import Error from "../components/ui/Messages/error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/RecipeCreate";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import Brunch from "./pages/Brunch";
import Breakfast from "./pages/Breakfast";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>

            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/brunch">
              <Brunch />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
