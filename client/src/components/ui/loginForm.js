import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = () => {
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          console.log("Login Successful!");
          localStorage["token"] = res.data.token;
          const userToken = localStorage.getItem("token");
          const userName = jwt_decode(userToken).email;
          console.log(userName);
          localStorage['username'] = userName;
        }
      })
      .catch((err) => {
        console.log("Login Failed");
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h3 id="orangeTitle">
            Welcome to <span id="blackTitle"> Baby's </span>{" "}
          </h3>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </Col>

        <Col md={6}>
          <div className="loginForm">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="greenButton"
                variant="primary"
                onClick={submitLogin}
              >
                Log In
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
