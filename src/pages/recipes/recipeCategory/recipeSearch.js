import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Container from "@material-ui/core/Container";
import { useRecipes } from "../../../hooks/useRecipes";

export default function RecipeSearch() {
  const recipes = useRecipes();

  const options = recipes.map((recipe) => {
    const category = recipe.categories[0].toUpperCase();
    return {
      category: /[0-9]/.test(category) ? "0-9" : category,
      ...recipe,
    };
  });

  return (
    <Container maxWidth="sm">
      <Autocomplete
        options={options.sort((a, b) => -b.category.localeCompare(a.category))}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.name}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search recipes and more..."
          />
        )}
      />
    </Container>
  );
}
