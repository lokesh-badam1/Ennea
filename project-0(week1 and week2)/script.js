//fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata").then(res => res.json()).then(data => console.log(data))
// Wrong
// fetch("http://www.themealdb.com/api/json/v1/1/search.php?s=Arribiata",{mode: 'no-cors'}).then(res => res.json()).then(data => console.log(data)).catch(console.log("err"));
function fetchRecipe(){
    const url = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        let recipe = data["meals"][0];
        displayRecepie(recipe);
        let ul = document.querySelector('#Ingredients');
        console.log(ul.innerHTML)
        addIngredients(recipe,ul);
    })
    .catch(displayError);
}

function displayRecepie(recipe){
    const leftDiv = document.querySelector('#image');
    const rightDiv = document.querySelector('#info');
    console.log(recipe.strMealThumb);
    leftDiv.innerHTML = `<img src="${recipe.strMealThumb}" alt="image">`;
    rightDiv.innerHTML = `<h1>${recipe.strMeal}</h1>
    <br>
    <h3>Instructions</h3>
    <p>${recipe.strInstructions}</p>
    <h3>Ingredients</h3>
    <ul id="Ingredients"></ul>`;
}


// ing refers to ingredient
function addIngredients(recipe,ul){
    for (let i = 1; i < 20; i++) {
        let ingStr = `strIngredient${i}`;
        ing = recipe[ingStr]
        if(ing === "" || ing === null){
            continue;
        }
        else{
            li = document.createElement("li")
            li.textContent = ing;
            ul.appendChild(li);
        }    
    };
}

function displayError() {
    const leftDiv = document.querySelector('#image');
    leftDiv.innerText = "API: Error";
}

fetchRecipe();