import { Button, Card, Container, Modal } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

function Dashboard(props) {
  const [data, setData] = useState();

  const apiURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiURL);
      setData(response.data);
    }
    fetchData();
  }, []);

  const [dataModal, setDataModal] = useState([]);

  const dataOut = (email, body) => {
    let oneCard = [email, body];
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
                  src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                  className="fluid"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{x.email}</Card.Title>
                  <Card.Text className="cardText">{x.body}</Card.Text>
                  <Button
                    variant="success"
                    className="cardButton"
                    onClick={() => {
                      dataOut(x.email, x.body);
                    }}
                  >
                    Full Recipe
                  </Button>
                  <Card.Footer className="cardFooter">
                    {
                      <div>
                        <span className="material-icons">schedule</span>
                        <span> {x.id} minutes </span>
                      </div>
                    }
                    {
                      <div>
                        <span className="material-icons">restaurant</span>
                        <span> {x.id} persons</span>
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
              <Modal.Title>{dataModal[1]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <p>{dataModal[2]}</p>
              </>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleHide}>
                Close Modal
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default Dashboard;
