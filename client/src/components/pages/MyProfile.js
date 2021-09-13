import React from "react";
import { Col, Row, Form, Button, Container, Figure } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "../../assets/styles/calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import RouteHeader from "../widgets/routeheader";

function MyProfile() {
  let history = useHistory();

  const [startDate, setStartDate] = useState("");

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldAvatar, setOldAvatar] = useState("");
  const author = localStorage.getItem("username");

  //Image preview and main image handling
  const [previewSource, setPreviewSource] = useState("");

  useEffect(() => {
    axios.get(`/${author}`).then((res) => {
      setOldAvatar(res.data);
    });
  }, []);

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

  //PUT request
  const submitUpdate = () => {
    let obj = {
      avatar: previewSource,
      first_name: first_name,
      last_name: last_name,
      email: email,
      birthday: startDate,
      password: password,
      author: author,
    };

    axios
      .put(`/update`, obj)
      .then((res) => {
        console.log(res);
        history.push("/myprofile");
      })
      .catch((err) => {
        console.log("User update failed!");
        console.log(err);
      });
  };

  return (
    <div>
      <RouteHeader title="My Profile" />

      <Container>
        <Row>
          <Form>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="formGroupEmail">
                  <Figure>
                    <Figure.Image
                      className="rounded"
                      width={150}
                      height={150}
                      src={previewSource}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `${oldAvatar}`;
                      }}
                    />
                  </Figure>

                  <Form.Control
                    style={{ width: 104, margin: 30 }}
                    type="file"
                    name="avatar"
                    onChange={handleFileInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="John"
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                  <br />
                </Form.Group>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                </Form.Group>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    style={{ marginTop: 20 }}
                    className="greenButton"
                    variant="primary"
                    onClick={submitUpdate}
                  >
                    Save
                  </Button>
                  <br />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Constantine"
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                  <br />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Birthday</Form.Label>
                  <DatePicker
                    className="inputCal"
                    dateFormat="dd/MM/yyyy"
                    placeholder="Date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <br />
                  <br />
                </Form.Group>
                <Form.Group className="" controlId="formGroupEmail">
                  <Form.Label>Repeat Password</Form.Label>
                  <br />
                  <Form.Control
                    type="password"
                    name="repeat_password"
                    placeholder="**********"
                  />
                  <br />
                </Form.Group>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default MyProfile;
