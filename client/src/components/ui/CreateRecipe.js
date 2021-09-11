import React from "react";
import { Col, Row, Form, Button, Container, Figure } from "react-bootstrap";

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
                  <Figure>
                    <Figure.Image
                      className="rounded"
                      width={191}
                      height={200}
                      alt="191x200"
                      src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                    />
                  </Figure>
                  <Button style={{ margin: 20 }} variant="outline-secondary">
                    Upload Image
                  </Button>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Recipe Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Homemade Pizza"
                  />
                  <br />
                </Form.Group>
                <Row
                  style={{
                    width: 150,
                    display: "inline-block",
                    margin: 10,
                  }}
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select">
                    <option value="breakfast">Breakfast</option>
                    <option value="brunch">Brunch</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </Form.Control>
                </Row>
                <Row
                  style={{
                    width: 150,
                    display: "inline-block",
                    margin: 10,
                  }}
                >
                  <Form.Label>Prep. Time</Form.Label>
                  <Form.Control type="text" name="prep_time" placeholder="45" />
                </Row>
                <Row
                  style={{
                    width: 150,
                    display: "inline-block",
                    margin: 10,
                  }}
                >
                  <Form.Label>No. people</Form.Label>
                  <Form.Control type="text" name="prep_time" placeholder="4" />
                </Row>
                <Row style={{ marginTop: 15 }}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: 80 }}
                      type="text"
                      name="recipe_description"
                      placeholder="Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan."
                    />
                  </Form.Group>
                </Row>
                <Button
                  style={{ marginTop: 20 }}
                  className="greenButton"
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
              </Col>
              <Col md={5}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Recipe</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: 270 }}
                    name="recipe"
                    placeholder="Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultricies mi eget mauris pharetra et ultrices neque. At tempor commodo ullamcorper a lacus vestibulum. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Nullam vehicula ipsum a arcu. Egestas purus viverra accumsan in nisl nisi scelerisque. ."
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default CreateRecipe;
