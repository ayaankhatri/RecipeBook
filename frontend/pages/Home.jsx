import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ filter }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  let url = "http://localhost:5050/api/recipes";

  if (filter !== "all") {
    url += `?type=${filter}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("FILTER:", filter);
      console.log("DATA:", data);
      setRecipes(data);
    });
  }, [filter]);

  if (recipes.length === 0) {
    return <p style={{ padding: "20px" }}>No recipes found.</p>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <div key={recipe._id} className="recipe-card">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-image"
          />

          <h3 className="recipe-title">{recipe.title}</h3>

          <Link to={`/recipe/${recipe._id}`}>
            <button className="view-btn">View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
}