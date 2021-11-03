import { Row, Col, Button, Card, Container, Modal } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const [data, setData] = useState();
  const user = localStorage.getItem("username");
  const apiURL = `/api/${props.route}`;
  let history = useHistory();

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
    date,
    _id
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
      _id
    ];
    setDataModal((x) => [1, ...oneCard]);

    return setShow(true);
  };

  const [show, setShow] = useState(false);

  const handleHide = () => setShow(false);

  return (
    <Container>
      <div id="asd1">
        {data &&
          data.map((x, index) => {
            return (
              <Card className="card" key={index}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "15vw", objectFit: "cover" }}
                  // src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                  src={x.recipe_image}
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
                        x.date,
                        x._id
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
                        {x.stars.includes(user) ? (
                          <span>
                            <span
                              className="material-icons"
                              style={{cursor:"pointer"}}
                              onClick={() => {
                                axios
                                  .patch(`/api/unstar/${x._id}/${user}`)
                                  .then((res) => {
                                    console.log(res);
                                    history.go(0);

                                  });
                              }}
                            >
                              star
                            </span>
                            {x.stars.length} stars{" "}
                          </span>
                        ) : (
                          <span>
                            <span
                              className="material-icons"
                              style={{cursor:"pointer"}}
                              onClick={() => {
                                axios
                                  .patch(`/api/star/${x._id}/${user}`)
                                  .then((res) => {
                                    console.log(res);
                                    history.go(0);

                                  });
                              }}
                            >
                              star_border
                            </span>
                            {x.stars.length} stars{" "}
                          </span>
                        )}
                      </div>
                    }
                  </Card.Footer>
                </Card.Body>
              </Card>
            );
          })}

        {show ? (
          <Modal show={show} size="lg" centered>
            <Modal.Header>
              <Modal.Title style={{ wordWrap: "break-word" }}>
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
                        style={{
                          width: "100%",
                          height: "15vw",
                          objectFit: "cover",
                        }}
                        src={dataModal[4]}
                        className="fluid "
                      />
                    </Row>
                    <Row>
                      <h4 className="green-text" style={{ marginTop: 15 }}>
                        Best Served for <span>{dataModal[7]}</span>
                      </h4>
                    </Row>
                    <Row className="recipeDetailsText">
                      <p>{dataModal[2]}</p>
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
                  {dataModal[8].includes(user) ? (
                          <span>
                            <span
                              className="material-icons"
                              style={{cursor:"pointer"}}
                              onClick={() => {
                                axios
                                  .patch(`/api/unstar/${dataModal[10]}/${user}`)
                                  .then((res) => {
                                    console.log(res);
                                    history.go(0);

                                  });
                              }}
                            >
                              star
                            </span>
                            {dataModal[8].length} stars{" "}
                          </span>
                        ) : (
                          <span>
                            <span
                              className="material-icons"
                              style={{cursor:"pointer"}}
                              onClick={() => {
                                axios
                                  .patch(`/api/star/${dataModal[10]}/${user}`)
                                  .then((res) => {
                                    console.log(res);
                                    history.go(0);

                                  });
                              }}
                            >
                              star_border
                            </span>
                            {dataModal[8].length} stars{" "}
                          </span>
                        )}
                </div>
              </Row>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>
    </Container>
  );
}

export default Dashboard;
