const data = {
  recipes: [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      description: "A classic Italian dish with a rich, meaty sauce.",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "red wine",
      ],
      instructions: [
        "Put water in a pot",
        "Add all ingredients into the pot",
        "Cook for 30 minutes",
      ],
      image: "img/bolognese.png",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
    },
    {
      id: 2,
      name: "Chicken Teriyaki",
      description:
        "A delicious Japanese dish featuring grilled chicken with a sweet soy sauce glaze.",
      ingredients: ["chicken breast", "soy sauce", "sugar", "mirin", "sake"],
      instructions: [
        "Grill the chicken",
        "Add the sauce",
        "Cook until it caramelizes",
      ],
      image: "img/teriyaki.jpg",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
    },
    {
      id: 3,
      name: "Spaghetti Bolognese",
      description: "A classic Italian dish with a rich, meaty sauce.",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "red wine",
      ],
      instructions: [
        "Put water in a pot",
        "Add all ingredients into the pot",
        "Cook for 30 minutes",
      ],
      image: "img/bolognese.png",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
    },
    {
      id: 4,
      name: "Chicken Teriyaki",
      description:
        "A delicious Japanese dish featuring grilled chicken with a sweet soy sauce glaze.",
      ingredients: ["chicken breast", "soy sauce", "sugar", "mirin", "sake"],
      instructions: [
        "Grill the chicken",
        "Add the sauce",
        "Cook until it caramelizes",
      ],
      image: "img/teriyaki.jpg",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      description: "A classic Italian dish with a rich, meaty sauce.",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "red wine",
      ],
      instructions: [
        "Put water in a pot",
        "Add all ingredients into the pot",
        "Cook for 30 minutes",
      ],
      image: "img/bolognese.png",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
    },
    {
      id: 6,
      name: "Chicken Teriyaki",
      description:
        "A delicious Japanese dish featuring grilled chicken with a sweet soy sauce glaze.",
      ingredients: ["chicken breast", "soy sauce", "sugar", "mirin", "sake"],
      instructions: [
        "Grill the chicken",
        "Add the sauce",
        "Cook until it caramelizes",
      ],
      image: "img/teriyaki.jpg",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
    },
    {
      id: 7,
      name: "Spaghetti Bolognese",
      description: "A classic Italian dish with a rich, meaty sauce.",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
        "olive oil",
        "red wine",
      ],
      instructions: [
        "Put water in a pot",
        "Add all ingredients into the pot",
        "Cook for 30 minutes",
      ],
      image: "img/bolognese.png",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
    },
    {
      id: 8,
      name: "Chicken Teriyaki",
      description:
        "A delicious Japanese dish featuring grilled chicken with a sweet soy sauce glaze.",
      ingredients: ["chicken breast", "soy sauce", "sugar", "mirin", "sake"],
      instructions: [
        "Grill the chicken",
        "Add the sauce",
        "Cook until it caramelizes",
      ],
      image: "img/teriyaki.jpg",
      prepTime: "10 minutes",
      cookTime: "20 minutes",
    },
  ],
};

const recipesContainer = document.getElementById("recipes");

const showMoreButton = document.getElementById("showMore");

let displayedRecipes = 3;

const displayRecipes = (startIndex, endIndex) => {
  recipesContainer.innerHTML = ""; // clear the container
  const recipesToDisplay = data.recipes.slice(startIndex, endIndex);

  recipesToDisplay.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe";

    const recipeLink = document.createElement("a");
    recipeLink.href = `recipe.html?id=${recipe.id}`; // Pass the recipe ID as a query parameter

    recipeLink.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <p>Prep Time: ${recipe.prepTime}</p>
      <p>Cook Time: ${recipe.cookTime}</p>
    `;

    recipeCard.appendChild(recipeLink);
    recipesContainer.appendChild(recipeCard);
  });

  // If all recipes have been displayed, change the button to "Hide"
  if (endIndex >= data.recipes.length) {
    showMoreButton.textContent = "Hide";
  } else {
    showMoreButton.textContent = "Show More";
  }
};

displayRecipes(0, displayedRecipes);

showMoreButton.addEventListener("click", () => {
  if (showMoreButton.textContent === "Hide") {
    displayedRecipes = 3;
  } else {
    displayedRecipes += 3;
  }
  displayRecipes(0, displayedRecipes);
});
