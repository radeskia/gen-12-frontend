import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import RouteHeader from "../widgets/routeheader";

function CreateRecipe() {
  return (
    <div>

      <Container>
        <Row>
          <Form>
            <Row className="mb-3">
              <Col md={2}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Recipe Image</Form.Label>
                  <Form.Control
                    type="text"
                    name="recipe_image"
                    placeholder="Upload Recipe Image"
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Recipe Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                  />
                  <br />
                </Form.Group>
                <Row>
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" style={{ width: 150 }}>
                    <option value="breakfast">Breakfast</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="orange">Orange</option>
                  </Form.Control>
                </Row>
              </Col>
              <Col md={5}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Recipe</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: 220 }}
                    name="recipe"
                    placeholder="Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultricies mi eget mauris pharetra et ultrices neque. At tempor commodo ullamcorper a lacus vestibulum. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Nullam vehicula ipsum a arcu. Egestas purus viverra accumsan in nisl nisi scelerisque. ."
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
              </Col>

              <Form.Group as={Col} className="" controlId="formGroupEmail">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  type="password"
                  name="repeatPass"
                  placeholder="Repeat password"
                />
              </Form.Group>
            </Row>
            <br />
            <Button className="greenButton" variant="primary" type="submit">
              Create account
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default CreateRecipe;
