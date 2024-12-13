import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import "./App.css"; // Ensure your CSS file has styles matching the design

const App = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false); // For loading indicator

  const fetchRecipe = async () => {
    setLoading(true);
    setRecipe(""); // Clear recipe before fetching new one
    try {
      const response = await fetch("https://recipemaker.poladharmat887.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });
      const data = await response.json();
      setRecipe(data.recipe || "No recipe generated. Try again!");
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("An error occurred while generating the recipe. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      {/* Title Image */}
      <div>
        <img
          src="/AI RECIPE GENERATOR.png" // Reference to the public folder
          alt="AI Recipe Generator"
          className="title-image"
        />
      </div>
      {/* Input Section */}
      <div className="input-section">
        <textarea
          className="ingredients-input"
          placeholder="Enter your ingredients separated by commas, e.g: chicken, onion, rice..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button className="generate-button" onClick={fetchRecipe}>
          Generate
        </button>
      </div>
      {/* Output Section */}
      <div className="output-section">
        <div>
          <img
            src="/Group.png" // Add your robot icon in the public folder
            alt="Robot"
            className="robot-icon"
          />
        </div>
        <h2 className="output-title">
          GENERATED RECIPE:{" "}
          <span className="loading-text">
            {loading && "(Wait for 30 sec to let AI cook the process)"}
          </span>
        </h2>
        {/* Render recipe with Markdown */}
        <div className="recipe-output">
          <ReactMarkdown>{recipe || "No recipe generated yet."}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;