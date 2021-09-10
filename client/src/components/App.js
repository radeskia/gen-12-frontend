import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/loginForm.css";
import "../assets/styles/routeHeader.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "../components/ui/Messages/error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyRecipes from "./pages/MyRecipes";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import Brunch from "./pages/Brunch";
import Breakfast from "./pages/Breakfast";
import Logout from "./pages/Logout";
import jwt_decode from "jwt-decode";

const App = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      if (!logged) setLogged(true);
    }
  }, []);

  const submitLogin = (email, password) => {
    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          console.log("Login Successful!");
          localStorage["token"] = res.data.token;
          const userToken = localStorage.getItem("token");
          const userName = jwt_decode(userToken).id;
          localStorage["username"] = userName;
          setLogged(true);
        }
      })
      .catch((err) => {
        console.log("Login Failed");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Header logged={logged} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login submitLogin={submitLogin} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myrecipes">
              <MyRecipes />
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
            <Route path="/logout">
              <Logout setLogged={setLogged} />
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
