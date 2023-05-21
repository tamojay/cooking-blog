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

const recipeDetailsContainer = document.getElementById("recipe-details");
const recipeId = new URLSearchParams(window.location.search).get("id");
const recipeData = data.recipes.find((recipe) => recipe.id == recipeId);

if (recipeData) {
  recipeDetailsContainer.innerHTML = `
     <img src="${recipeData.image}" alt="${
    recipeData.name
  }" class="recipe-image">
     <h2>${recipeData.name}</h2>
     <p>${recipeData.description}</p>
     <p>Prep Time: ${recipeData.prepTime}</p>
     <p>Cook Time: ${recipeData.cookTime}</p>
     <h3>Ingredients:</h3>
     <ul>
       ${recipeData.ingredients
         .map((ingredient) => `<li>${ingredient}</li>`)
         .join("")}
     </ul>
     <h3>Instructions:</h3>
     <ol>
       ${recipeData.instructions
         .map((instruction) => `<li>${instruction}</li>`)
         .join("")}
     </ol>
   `;
} else {
  recipeDetailsContainer.innerHTML = `<p>Recipe not found.</p>`;
}
