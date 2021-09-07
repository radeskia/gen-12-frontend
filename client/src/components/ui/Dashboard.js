import { Row, Col, Button, Card, Container, Modal } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

function Dashboard(props) {
  const [data, setData] = useState();

  const apiURL = `http://localhost:3002/${props.route}`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiURL);
      setData(response.data);
    }
    fetchData();
  }, []);

  const [dataModal, setDataModal] = useState([]);

  const dataOut = (
    recipe_title,
    recipe_description,
    recipe_content,
    recipe_image,
    recipe_category,
    recipe_prep_time,
    number_of_people,
    stars,
    date
  ) => {
    let oneCard = [
      recipe_title,
      recipe_description,
      recipe_content,
      recipe_image,
      recipe_category,
      recipe_prep_time,
      number_of_people,
      stars,
      date,
    ];
    setDataModal((x) => [1, ...oneCard]);

    return setShow(true);
  };

  const [show, setShow] = useState(false);

  const handleHide = () => setShow(false);

  return <Container>
    <div id="asd1">
      {data &&
        data.map((x, index) => {
          return (
            <Card className="card" key={index}>
              <Card.Img
                variant="top"
                src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                className="fluid"
              />
              <Card.Body>
                <Card.Title className="cardTitle">
                  {x.recipe_title}
                </Card.Title>
                <Card.Text className="cardText">
                  {x.recipe_description}
                </Card.Text>
                <Button
                  variant="success"
                  className="cardButton"
                  onClick={() => {
                    dataOut(
                      x.recipe_title,
                      x.recipe_description,
                      x.recipe_content,
                      x.recipe_image,
                      x.recipe_category,
                      x.recipe_prep_time,
                      x.number_of_people,
                      x.stars,
                      x.date
                    );
                  }}
                >
                  Full Recipe
                </Button>
                <Card.Footer className="cardFooter">
                  {
                    <div>
                      <i className="material-icons">schedule</i>{" "}
                      {x.recipe_prep_time} min{" "}
                      <span className="material-icons">restaurant</span>{" "}
                      {x.number_of_people} people
                      <span className="material-icons">star_border</span>{" "}
                      {x.stars} stars
                    </div>
                  }
                </Card.Footer>
              </Card.Body>
            </Card>
          );
        })}

      {show ? (
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              <h2 className="orange-title">{dataModal[1]}</h2>
            </Modal.Title>
            <button className="close-button" onClick={handleHide}>
              Close
            </button>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={6}>
                  <Row>
                    <Card.Img
                      variant="top"
                      src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                      className="fluid "
                    />
                  </Row>
                  <Row>
                    <h4 className="green-text">
                      Best Served for <span>{dataModal[7]}</span>{" "}
                    </h4>{" "}
                  </Row>
                  <Row className="recipeDetailsText">
                    <p>{dataModal[3]}</p>
                  </Row>
                </Col>
                <Col xs={6}>
                  <Row>
                    <h4 className="green-text">Recipe details</h4>
                  </Row>
                  <Row className="recipeDetailsText">
                    <p>{dataModal[3]}</p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Row className="modal-footer">
              <div>
                <i className="material-icons">schedule</i> {dataModal[6]} min{" "}
                <span className="material-icons">restaurant</span>{" "}
                {dataModal[7]} people
                <span className="material-icons">star_border</span>{" "}
                {dataModal[8]} stars
              </div>
            </Row>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  </Container>;
}

export default Dashboard;
