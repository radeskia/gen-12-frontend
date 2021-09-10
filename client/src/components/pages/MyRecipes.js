import RouteHeader from "../widgets/routeheader";
import RecipeList from "../ui/RecipeList";

const MyRecipes = () => {
  return (
    <div>
      <RouteHeader title="My Recipes" />
      <RecipeList />
    </div>
  );
};

export default MyRecipes;
