import RouteHeader from "../widgets/routeheader";
import RecipeList from "../ui/RecipeList";
import Create from "../ui/CreateRecipe";
import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";

const MyRecipes = () => {
  const [createPage, setCreatePage] = useState(false);
  const [button, setButton] = useState("Create");
  const handleClick = () => {
    setCreatePage(!createPage);
    if (createPage) {
      setButton("Create");
    } else {
      setButton("My Recipes");
    }
  };
  return (
    <div>
      <RouteHeader title="My Recipes" />
      <Container>
        <Button className="greenButton" variant="primary" onClick={handleClick}>
          {button}
        </Button>
      </Container>
      <br />
      {createPage ? <Create /> : <RecipeList />}
    </div>
  );
};

export default MyRecipes;
