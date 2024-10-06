const API_KEY = 'b73acb729f95409bbee1b7108869b414'; // Replace with your API key
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    fetchRecipes(query);
});

async function fetchRecipes(query) {
    const response = await fetch(`${API_URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    displayRecipes(data.results);
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        recipeList.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
        `;
        
        recipeList.appendChild(recipeCard);
    });
}
