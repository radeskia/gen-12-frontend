import { Col, Row, Form, Button, Container } from "react-bootstrap";
import Calendar from "../widgets/calendar";

const RegisterForm = () => {
  return (
    <Container>
        <Row>
          <Col md={4}>
            <h3 id="orangeTitle">Create your <p id="blackTitle"> account</p></h3 >
            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </Col>
          <Col md={8}>
          
          <div className="registerForm">
      <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
 
    <Form.Group as={Col} controlId="form-control">
      <Form.Label>Birthday</Form.Label> 
      <br/>
      {/* <Form.Row /> */}
      <Calendar/>
    </Form.Group>

  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <br/>
        <Button className="greenButton" variant="primary" type="submit">
        Create account
        </Button>
      </Form>
    </div>
          </Col>
        </Row>
        </Container>
   /* <div className="loginForm">
      <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter first name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter last name" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
 
    <Form.Group as={Col} controlId="formGroupEmail">
      <Form.Label>Birthday</Form.Label>
      <Calendar/>
    </Form.Group>
  
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGroupPassword">
      <Form.Label>Repeat Password</Form.Label>
      <Form.Control type="password" placeholder="Repeat password" />
    </Form.Group>
  </Row>
        <Button className="greenButton" variant="primary" type="submit">
        Create account
        </Button>
      </Form>
    </div>
    */
  );
};

export default RegisterForm;