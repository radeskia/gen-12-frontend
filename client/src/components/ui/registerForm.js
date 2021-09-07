import { Col, Row, Form, Button, Container } from "react-bootstrap";
import Calendar from "../widgets/calendar";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = () => {
    let reg = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      birthday: birthday,
      password: password
    }

    console.log('register with this: ', reg)

    axios
      .post("http://localhost:3002/register", reg)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Login Failed");
        console.log(err);
      });
  };
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h3 id="orangeTitle">
            Create your <p id="blackTitle"> account</p>
          </h3>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
        </Col>
        <Col md={8}>
          <div className="registerForm">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="text"
                    name="birthday"
                    placeholder="Enter birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupEmail">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="repeatPass"
                    placeholder="Repeat password"
                  />
                </Form.Group>
              </Row>
              <br />
              <Button
                className="greenButton"
                variant="primary"
                type="submit"
                onClick={submitRegister}
              >
                Create account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
