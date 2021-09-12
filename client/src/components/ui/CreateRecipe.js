import React, { useState } from "react";
import { Col, Row, Form, Button, Container, Figure } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreateRecipe() {
  let history = useHistory();

  const [recipe_title, setRecipe_title] = useState("");
  const [recipe_content, setRecipe_content] = useState("");
//   const [recipe_image, setRecipe_image] = useState("");
  const [recipe_category, setRecipe_category] = useState("Breakfast");
  const [recipe_description, setRecipe_description] = useState("");
  const [recipe_prep_time, setRecipe_prep_time] = useState("");
  const [number_of_people, setNumber_of_people] = useState("");
  const author = localStorage.getItem("username");

  //Image preview and main cloudinary pipeline
//   const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
//   const [selectedFile, setSelectedFile] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const submitRecipe = () => {
    let obj = {
      recipe_title: recipe_title,
      recipe_content: recipe_content,
      recipe_image: previewSource,
      recipe_category: recipe_category,
      recipe_description: recipe_description,
      recipe_prep_time: recipe_prep_time,
      number_of_people: number_of_people,
      author: author,
    };
    console.log(obj);

    axios
      .post("/create", obj)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log("Recipe failed to save!");
        console.log(err);
      });
  };

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
                      src={previewSource}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src =
                          "https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg";
                      }}
                    />
                  </Figure>

                  <Form.Control
                    style={{ width: 104, margin: 30 }}
                    type="file"
                    name="recipe_image"
                    onChange={handleFileInputChange}
                    // value={fileInputState}
                  />
                  {/* <Button style={{ margin: 20 }} variant="outline-secondary">
                    Upload Image
                  </Button> */}
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Recipe Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="recipe_title"
                    placeholder="Homemade Pizza"
                    onChange={(e) => setRecipe_title(e.target.value)}
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
                  <Form.Control
                    as="select"
                    onChange={(e) => setRecipe_category(e.target.value)}
                  >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Brunch">Brunch</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
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
                  <Form.Control
                    type="text"
                    name="recipe_prep_time"
                    placeholder="45"
                    onChange={(e) => setRecipe_prep_time(e.target.value)}
                  />
                </Row>
                <Row
                  style={{
                    width: 150,
                    display: "inline-block",
                    margin: 10,
                  }}
                >
                  <Form.Label>No. people</Form.Label>
                  <Form.Control
                    type="text"
                    name="number_of_people"
                    placeholder="4"
                    onChange={(e) => setNumber_of_people(e.target.value)}
                  />
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
                      onChange={(e) => setRecipe_description(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Button
                  style={{ marginTop: 20 }}
                  className="greenButton"
                  variant="primary"
                  onClick={submitRecipe}
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
                    onChange={(e) => setRecipe_content(e.target.value)}
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
