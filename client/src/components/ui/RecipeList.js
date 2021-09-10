import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeList(props) {
  const [data, setData] = useState();
  const user = localStorage.getItem("username");
  const [toDelete, setToDelete] = useState("");

  useEffect(() => {
    axios.get(`/myrecipes/${user}`).then((res) => {
      setData(res.data);
    });
  }, []);

  //console.log(toDelete);

  return (
    <div>
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Category</th>
              <th>Created on</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{x.recipe_title}</td>
                    <td>{x.recipe_category}</td>
                    <td>{x.date}</td>
                    <td>Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default RecipeList;
