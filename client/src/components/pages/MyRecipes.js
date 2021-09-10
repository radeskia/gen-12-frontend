import RouteHeader from "../widgets/routeheader";
import RecipeList from "../ui/RecipeList";
import Create from "../ui/CreateRecipe";
import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";

const MyRecipes = () => {
  const [createPage, setCreatePage] = useState(false);

  return (
    <div>
      <RouteHeader title="My Recipes" />
      <Container>
        <Button
          className="greenButton"
          variant="primary"
          onClick={() => setCreatePage(!createPage)}
        >
          Create
        </Button>
      </Container>
      <br />
      {createPage ? <Create /> : <RecipeList />}
    </div>
  );
};

export default MyRecipes;
