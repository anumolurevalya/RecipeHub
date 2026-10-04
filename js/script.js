/* =====================================================
   RECIPEHUB - FINAL SCRIPT.JS
===================================================== */


/* =====================================================
   RECIPE DATABASE
===================================================== */

const recipes = [

    {
        id: "biryani",
        title: "Chicken Biryani",
        category: "Indian",
        image: "images/briyani.jpg",
        time: "60 min",
        rating: 4.8,
        description:
            "Aromatic basmati rice cooked with spicy chicken and traditional Indian spices.",
        ingredients: [
            "2 cups basmati rice",
            "500g chicken",
            "1 large onion",
            "2 tomatoes",
            "2 tbsp ginger garlic paste",
            "1/2 cup yogurt",
            "Biryani masala",
            "Salt",
            "Oil",
            "Fresh coriander"
        ],
        instructions: [
            "Wash and soak basmati rice for 30 minutes.",
            "Marinate chicken with yogurt and spices.",
            "Fry onions until golden brown.",
            "Cook chicken with tomatoes and spices.",
            "Cook rice until partially done.",
            "Layer rice over chicken.",
            "Cover and cook on low flame for 15 minutes.",
            "Garnish and serve hot."
        ]
    },

    {
        id: "paneer",
        title: "Paneer Butter Masala",
        category: "Vegetarian",
        image: "images/panner butter masala.avif",
        time: "40 min",
        rating: 4.7,
        description:
            "Soft paneer cooked in a rich and creamy tomato gravy.",
        ingredients: [
            "250g paneer",
            "3 tomatoes",
            "1 onion",
            "2 tbsp butter",
            "1/2 cup cream",
            "Garam masala",
            "Chilli powder",
            "Salt"
        ],
        instructions: [
            "Cut paneer into cubes.",
            "Prepare tomato and onion gravy.",
            "Add butter and spices.",
            "Add paneer cubes.",
            "Add cream.",
            "Cook for 5 minutes and serve."
        ]
    },

    {
        id: "pasta",
        title: "Creamy Garlic Pasta",
        category: "Italian",
        image: "images/Creamy-Garlic-Penne-Pasta.jpg",
        time: "30 min",
        rating: 4.6,
        description:
            "Creamy garlic pasta prepared with cheese, herbs and vegetables.",
        ingredients: [
            "200g pasta",
            "1 cup cream",
            "2 garlic cloves",
            "Cheese",
            "Mixed vegetables",
            "Black pepper",
            "Salt"
        ],
        instructions: [
            "Boil the pasta.",
            "Fry garlic in butter.",
            "Add vegetables.",
            "Add cream and cheese.",
            "Add pasta.",
            "Season with salt and pepper.",
            "Serve hot."
        ]
    },

    {
        id: "salad",
        title: "Fresh Garden Salad",
        category: "Vegetarian",
        image: "images/Fresh-Garden-Salad-with-Vinaigrette.webp",
        time: "15 min",
        rating: 4.5,
        description:
            "Healthy and refreshing salad made with fresh vegetables.",
        ingredients: [
            "Lettuce",
            "Tomato",
            "Cucumber",
            "Carrot",
            "Onion",
            "Lemon juice",
            "Salt",
            "Pepper"
        ],
        instructions: [
            "Wash all vegetables.",
            "Cut vegetables into small pieces.",
            "Mix them in a bowl.",
            "Add lemon juice.",
            "Season with salt and pepper.",
            "Serve fresh."
        ]
    },

    {
        id: "pizza",
        title: "Cheese Pizza",
        category: "Italian",
        image: "images/l-intro-1677441572.jpg",
        time: "35 min",
        rating: 4.6,
        description:
            "Cheesy homemade pizza with a crispy crust and tasty toppings.",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Mozzarella cheese",
            "Capsicum",
            "Onion",
            "Sweet corn",
            "Oregano"
        ],
        instructions: [
            "Place pizza base on a tray.",
            "Spread pizza sauce.",
            "Add vegetables.",
            "Add mozzarella cheese.",
            "Sprinkle oregano.",
            "Bake until cheese melts.",
            "Serve hot."
        ]
    },

    {
        id: "cake",
        title: "Chocolate Cake",
        category: "Dessert",
        image: "images/Best-Moist-Chocolate-Cake1-1.jpg",
        time: "50 min",
        rating: 4.9,
        description:
            "Soft and delicious chocolate cake perfect for celebrations.",
        ingredients: [
            "1 cup flour",
            "1/2 cup cocoa powder",
            "1 cup sugar",
            "2 eggs",
            "1/2 cup milk",
            "1/2 cup butter",
            "1 tsp baking powder"
        ],
        instructions: [
            "Mix flour, cocoa powder and baking powder.",
            "Beat eggs and sugar.",
            "Add milk and butter.",
            "Mix everything together.",
            "Pour into a baking pan.",
            "Bake for 35 minutes.",
            "Allow to cool and serve."
        ]
    },

    {
        id: "dosa",
        title: "Masala Dosa",
        category: "Indian",
        image: "images/Masala-Dosa.webp",
        time: "35 min",
        rating: 4.8,
        description:
            "Crispy South Indian dosa filled with spicy potato masala.",
        ingredients: [
            "Dosa batter",
            "Potatoes",
            "Onion",
            "Green chilli",
            "Mustard seeds",
            "Curry leaves",
            "Salt"
        ],
        instructions: [
            "Prepare potato masala.",
            "Heat a dosa pan.",
            "Spread dosa batter.",
            "Add potato masala.",
            "Cook until crispy.",
            "Fold and serve."
        ]
    },

    {
        id: "noodles",
        title: "Veg Hakka Noodles",
        category: "Chinese",
        image: "images/Veg-Hakka-Noodles-The-Chutney-Life-4-1.jpeg",
        time: "25 min",
        rating: 4.6,
        description:
            "Tasty vegetable noodles cooked with fresh vegetables and sauces.",
        ingredients: [
            "Noodles",
            "Carrot",
            "Capsicum",
            "Cabbage",
            "Soy sauce",
            "Chilli sauce",
            "Salt"
        ],
        instructions: [
            "Boil noodles.",
            "Heat oil in a pan.",
            "Add vegetables.",
            "Add sauces.",
            "Add noodles.",
            "Mix well and serve."
        ]
    },

    {
        id: "chickenCurry",
        title: "Chicken Tikka Masala",
        category: "Indian",
        image: "images/ChickenTikkaMasalaCurry.jpg",
        time: "50 min",
        rating: 4.7,
        description:
            "Spicy and flavorful chicken curry cooked with Indian spices.",
        ingredients: [
            "500g chicken",
            "2 onions",
            "2 tomatoes",
            "Ginger garlic paste",
            "Turmeric",
            "Chilli powder",
            "Garam masala",
            "Salt"
        ],
        instructions: [
            "Heat oil and fry onions.",
            "Add ginger garlic paste.",
            "Add tomatoes and spices.",
            "Add chicken.",
            "Cook until chicken becomes tender.",
            "Cook until the gravy thickens.",
            "Serve hot."
        ]
    },

    {
        id: "sandwich",
        title: "Grilled Sandwich",
        category: "Snacks",
        image: "images/bdab3d465605da426b8f7aba9425313d.jpg",
        time: "20 min",
        rating: 4.5,
        description:
            "Crispy grilled sandwich filled with vegetables and cheese.",
        ingredients: [
            "Bread",
            "Cheese",
            "Tomato",
            "Onion",
            "Capsicum",
            "Butter",
            "Pepper"
        ],
        instructions: [
            "Apply butter on bread.",
            "Add vegetables and cheese.",
            "Season with pepper.",
            "Close the sandwich.",
            "Grill until golden brown.",
            "Cut and serve."
        ]
    }

];


/* =====================================================
   STORAGE
===================================================== */

function getRecipes() {

    const saved =
        localStorage.getItem("recipeHubRecipes");

    if (!saved) {

        localStorage.setItem(
            "recipeHubRecipes",
            JSON.stringify(recipes)
        );

        return recipes;

    }

    const savedRecipes =
        JSON.parse(saved);

    /* FIX IMAGE PATHS */

    savedRecipes.forEach(recipe => {

        const original =
            recipes.find(
                item => item.id === recipe.id
            );

        if (original) {

            recipe.image =
                original.image;

        }

    });

    return savedRecipes;
}


function saveRecipes(list) {

    localStorage.setItem(
        "recipeHubRecipes",
        JSON.stringify(list)
    );

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageName) {

    document
        .querySelectorAll(".app-page")
        .forEach(page => {

            page.style.display = "none";

        });


    const page =
        document.getElementById(
            pageName + "Page"
        );


    if (page) {

        page.style.display = "block";

    }


    window.scrollTo(0, 0);


    if (pageName === "recipes") {

        displayAllRecipes();

    }


    if (pageName === "favorites") {

        displayFavorites();

    }


    if (pageName === "shared") {

        displaySharedRecipes();

    }


    if (pageName === "admin") {

        displayAdminRecipes();

    }


    if (pageName === "profile") {

        loadProfile();

    }

}


/* =====================================================
   RECIPE CARD
===================================================== */

function createRecipeCard(recipe) {

    return `

        <div class="recipe-card">

            <div class="recipe-image-container">

                <img
                    src="${recipe.image}"
                    alt="${recipe.title}"
                    class="recipe-image"
                    onerror="this.style.display='none'"
                >

                <button
                    class="favorite-btn"
                    onclick="addFavorite('${recipe.id}')"
                >
                    ❤️
                </button>

            </div>


            <div class="recipe-card-content">

                <span class="recipe-category">
                    ${recipe.category}
                </span>

                <h3>
                    ${recipe.title}
                </h3>

                <p>
                    ${recipe.description}
                </p>

                <div class="recipe-info">

                    <span>
                        ⏱️ ${recipe.time}
                    </span>

                    <span>
                        ⭐ ${recipe.rating}
                    </span>

                </div>

                <button
                    class="primary-btn"
                    onclick="showRecipe('${recipe.id}')"
                >
                    View Recipe
                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   DISPLAY RECIPES
===================================================== */

function displayAllRecipes() {

    const container =
        document.getElementById(
            "recipeContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    getRecipes().forEach(recipe => {

        container.innerHTML +=
            createRecipeCard(recipe);

    });

}


/* =====================================================
   SEARCH
===================================================== */

function filterRecipes() {

    const input =
        document.getElementById(
            "recipeSearch"
        ) ||
        document.getElementById(
            "searchInput"
        );


    const container =
        document.getElementById(
            "recipeContainer"
        );


    if (!input || !container) return;


    const text =
        input.value.toLowerCase();


    const filtered =
        getRecipes().filter(recipe =>

            recipe.title
                .toLowerCase()
                .includes(text)

            ||

            recipe.category
                .toLowerCase()
                .includes(text)

            ||

            recipe.description
                .toLowerCase()
                .includes(text)

        );


    container.innerHTML = "";


    filtered.forEach(recipe => {

        container.innerHTML +=
            createRecipeCard(recipe);

    });

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterCategory(category) {

    const container =
        document.getElementById(
            "recipeContainer"
        );


    if (!container) return;


    let list =
        getRecipes();


    if (category !== "All") {

        list =
            list.filter(
                recipe =>
                    recipe.category === category
            );

    }


    container.innerHTML = "";


    list.forEach(recipe => {

        container.innerHTML +=
            createRecipeCard(recipe);

    });

}


/* =====================================================
   RECIPE DETAILS
===================================================== */

function showRecipe(id) {

    const recipe =
        getRecipes().find(
            item => item.id === id
        );


    if (!recipe) return;


    setText(
        "detailTitle",
        recipe.title
    );


    setText(
        "detailCategory",
        recipe.category
    );


    setText(
        "detailDescription",
        recipe.description
    );


    setText(
        "detailRating",
        "⭐ " + recipe.rating
    );


    setText(
        "detailTime",
        "⏱️ " + recipe.time
    );


    const image =
        document.getElementById(
            "detailImage"
        );


    if (image) {

        image.src = recipe.image;
        image.alt = recipe.title;

    }


    const ingredients =
        document.getElementById(
            "ingredientsList"
        );


    if (ingredients) {

        ingredients.innerHTML =
            recipe.ingredients
                .map(
                    item =>
                        `<li>${item}</li>`
                )
                .join("");

    }


    const instructions =
        document.getElementById(
            "instructionsList"
        );


    if (instructions) {

        instructions.innerHTML =
            recipe.instructions
                .map(
                    item =>
                        `<li>${item}</li>`
                )
                .join("");

    }


    showPage("details");

}


/* =====================================================
   HELPER
===================================================== */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent = value;

    }

}


/* =====================================================
   FAVORITES
===================================================== */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem(
            "recipeHubFavorites"
        ) || "[]"
    );

}


function addFavorite(id) {

    const favorites =
        getFavorites();


    if (!favorites.includes(id)) {

        favorites.push(id);


        localStorage.setItem(
            "recipeHubFavorites",
            JSON.stringify(favorites)
        );


        alert(
            "Recipe added to Favorites ❤️"
        );

    }

    else {

        alert(
            "Recipe is already in Favorites."
        );

    }

}


function displayFavorites() {

    const container =
        document.getElementById(
            "favoritesContainer"
        );


    if (!container) return;


    const favorites =
        getFavorites();


    const list =
        getRecipes().filter(
            recipe =>
                favorites.includes(recipe.id)
        );


    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No Favorite Recipes Yet ❤️
                </h2>

                <p>
                    Add recipes to your favorites.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    list.forEach(recipe => {

        container.innerHTML +=
            createRecipeCard(recipe);

    });

}


/* =====================================================
   LOGIN
===================================================== */

function setupLogin() {

    const form =
        document.getElementById(
            "loginForm"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value;


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const user =
                JSON.parse(
                    localStorage.getItem(
                        "recipeHubUser"
                    )
                );


            if (
                user &&
                user.email === email &&
                user.password === password
            ) {

                localStorage.setItem(
                    "recipeHubLoggedIn",
                    "true"
                );


                alert(
                    "Login successful! 🎉"
                );


                showPage("home");

            }

            else {

                alert(
                    "Invalid email or password."
                );

            }

        }
    );

}


/* =====================================================
   SIGNUP
===================================================== */

function setupSignup() {

    const form =
        document.getElementById(
            "signupForm"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "signupName"
                ).value;


            const email =
                document.getElementById(
                    "signupEmail"
                ).value;


            const password =
                document.getElementById(
                    "signupPassword"
                ).value;


            localStorage.setItem(

                "recipeHubUser",

                JSON.stringify({

                    name,
                    email,
                    password

                })

            );


            alert(
                "Account created successfully! 🎉"
            );


            showPage("login");

        }
    );

}


/* =====================================================
   PROFILE
===================================================== */

function loadProfile() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "recipeHubUser"
            )
        );


    if (!user) return;


    setText(
        "profileName",
        user.name
    );


    setText(
        "profileEmail",
        user.email
    );


    setText(
        "favoriteCount",
        getFavorites().length
    );

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    localStorage.removeItem(
        "recipeHubLoggedIn"
    );


    alert(
        "Logged out successfully."
    );


    showPage("home");

}


/* =====================================================
   SHARED RECIPES
===================================================== */

function getSharedRecipes() {

    return JSON.parse(
        localStorage.getItem(
            "recipeHubSharedRecipes"
        ) || "[]"
    );

}


/* =====================================================
   SHARE RECIPE
===================================================== */

function saveSharedRecipe(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "sharedRecipeTitle"
        ).value.trim();


    const category =
        document.getElementById(
            "sharedRecipeCategory"
        ).value.trim();


    const description =
        document.getElementById(
            "sharedRecipeDescription"
        ).value.trim();


    const ingredients =
        document.getElementById(
            "sharedRecipeIngredients"
        ).value
        .split("\n")
        .filter(item => item.trim());


    const instructions =
        document.getElementById(
            "sharedRecipeInstructions"
        ).value
        .split("\n")
        .filter(item => item.trim());


    const image =
        document.getElementById(
            "sharedRecipeImage"
        ).value.trim();


    if (
        !title ||
        !category ||
        !description ||
        ingredients.length === 0 ||
        instructions.length === 0
    ) {

        alert(
            "Please fill all recipe details."
        );

        return;

    }


    const sharedRecipe = {

        id:
            "shared-" +
            Date.now(),

        title,

        category,

        description,

        ingredients,

        instructions,

        image:
            image ||
            "images/briyani.jpg",

        time: "User Shared",

        rating: 5,

        sharedBy:
            "RecipeHub User"

    };


    const sharedRecipes =
        getSharedRecipes();


    sharedRecipes.push(
        sharedRecipe
    );


    localStorage.setItem(

        "recipeHubSharedRecipes",

        JSON.stringify(
            sharedRecipes
        )

    );


    alert(
        "Recipe shared successfully! 🎉"
    );


    event.target.reset();


    displaySharedRecipes();

}


/* =====================================================
   DISPLAY SHARED RECIPES
===================================================== */

function displaySharedRecipes() {

    const container =
        document.getElementById(
            "sharedRecipesContainer"
        );


    if (!container) return;


    const list =
        getSharedRecipes();


    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No Shared Recipes Yet 🍴
                </h2>

                <p>
                    Be the first to share a recipe!
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    list.forEach(recipe => {

        container.innerHTML += `

            <div class="recipe-card">

                <div class="recipe-image-container">

                    <img
                        src="${recipe.image}"
                        class="recipe-image"
                        alt="${recipe.title}"
                    >

                </div>

                <div class="recipe-card-content">

                    <span class="recipe-category">
                        ${recipe.category}
                    </span>

                    <h3>
                        ${recipe.title}
                    </h3>

                    <p>
                        ${recipe.description}
                    </p>

                    <p>
                        👤 Shared by:
                        ${recipe.sharedBy}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="showSharedRecipe('${recipe.id}')"
                    >
                        View Recipe
                    </button>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   VIEW SHARED RECIPE
===================================================== */

function showSharedRecipe(id) {

    const recipe =
        getSharedRecipes().find(
            item => item.id === id
        );


    if (!recipe) return;


    setText(
        "detailTitle",
        recipe.title
    );


    setText(
        "detailCategory",
        recipe.category
    );


    setText(
        "detailDescription",
        recipe.description
    );


    const image =
        document.getElementById(
            "detailImage"
        );


    if (image) {

        image.src = recipe.image;

    }


    const ingredients =
        document.getElementById(
            "ingredientsList"
        );


    if (ingredients) {

        ingredients.innerHTML =
            recipe.ingredients
                .map(
                    item =>
                        `<li>${item}</li>`
                )
                .join("");

    }


    const instructions =
        document.getElementById(
            "instructionsList"
        );


    if (instructions) {

        instructions.innerHTML =
            recipe.instructions
                .map(
                    item =>
                        `<li>${item}</li>`
                )
                .join("");

    }


    showPage("details");

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

function displayAdminRecipes() {

    const table =
        document.getElementById(
            "adminRecipeTable"
        );


    if (!table) return;


    let html = `

        <table class="admin-table">

            <thead>

                <tr>

                    <th>Image</th>
                    <th>Recipe</th>
                    <th>Category</th>
                    <th>Time</th>
                    <th>Rating</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

    `;


    getRecipes().forEach(recipe => {

        html += `

            <tr>

                <td>

                    <img
                        src="${recipe.image}"
                        width="70"
                        height="50"
                        style="
                            object-fit:cover;
                            border-radius:8px;
                        "
                    >

                </td>

                <td>
                    ${recipe.title}
                </td>

                <td>
                    ${recipe.category}
                </td>

                <td>
                    ${recipe.time}
                </td>

                <td>
                    ⭐ ${recipe.rating}
                </td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editRecipe('${recipe.id}')"
                    >
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteRecipe('${recipe.id}')"
                    >
                        🗑️ Delete
                    </button>

                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    table.innerHTML = html;


    updateAdminStats();

}


/* =====================================================
   ADMIN STATS
===================================================== */

function updateAdminStats() {

    setText(
        "adminRecipeCount",
        getRecipes().length
    );


    setText(
        "adminFavoriteCount",
        getFavorites().length
    );


    setText(

        "adminUserCount",

        localStorage.getItem(
            "recipeHubUser"
        )
        ? "1"
        : "0"

    );

}


/* =====================================================
   EDIT RECIPE
===================================================== */

function editRecipe(id) {

    const recipe =
        getRecipes().find(
            item => item.id === id
        );


    if (!recipe) return;


    setText(
        "recipeFormTitle",
        "Edit Recipe"
    );


    document.getElementById(
        "editRecipeId"
    ).value = recipe.id;


    document.getElementById(
        "editRecipeName"
    ).value = recipe.title;


    document.getElementById(
        "editRecipeCategory"
    ).value = recipe.category;


    document.getElementById(
        "editRecipeTime"
    ).value = recipe.time;


    document.getElementById(
        "editRecipeRating"
    ).value = recipe.rating;


    document.getElementById(
        "editRecipeDescription"
    ).value = recipe.description;


    document.getElementById(
        "editRecipeIngredients"
    ).value =
        recipe.ingredients.join("\n");


    document.getElementById(
        "editRecipeInstructions"
    ).value =
        recipe.instructions.join("\n");


    document.getElementById(
        "editRecipeImage"
    ).value =
        recipe.image;


    document.getElementById(
        "recipeEditModal"
    ).style.display = "flex";

}


/* =====================================================
   ADD RECIPE
===================================================== */

function openAddRecipeForm() {

    const form =
        document.getElementById(
            "adminRecipeForm"
        );


    if (form) {

        form.reset();

    }


    document.getElementById(
        "editRecipeId"
    ).value = "";


    setText(
        "recipeFormTitle",
        "Add New Recipe"
    );


    document.getElementById(
        "recipeEditModal"
    ).style.display = "flex";

}


/* =====================================================
   CLOSE ADMIN FORM
===================================================== */

function closeRecipeForm() {

    const modal =
        document.getElementById(
            "recipeEditModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }

}


/* =====================================================
   SAVE ADMIN RECIPE
===================================================== */

function setupAdminForm() {

    const form =
        document.getElementById(
            "adminRecipeForm"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const list =
                getRecipes();


            const id =
                document.getElementById(
                    "editRecipeId"
                ).value;


            const newRecipe = {

                id:
                    id ||
                    "recipe-" +
                    Date.now(),

                title:
                    document.getElementById(
                        "editRecipeName"
                    ).value,

                category:
                    document.getElementById(
                        "editRecipeCategory"
                    ).value,

                time:
                    document.getElementById(
                        "editRecipeTime"
                    ).value,

                rating:
                    Number(
                        document.getElementById(
                            "editRecipeRating"
                        ).value
                    ),

                description:
                    document.getElementById(
                        "editRecipeDescription"
                    ).value,

                ingredients:
                    document.getElementById(
                        "editRecipeIngredients"
                    ).value
                    .split("\n")
                    .filter(item => item.trim()),

                instructions:
                    document.getElementById(
                        "editRecipeInstructions"
                    ).value
                    .split("\n")
                    .filter(item => item.trim()),

                image:
                    document.getElementById(
                        "editRecipeImage"
                    ).value

            };


            const index =
                list.findIndex(
                    item => item.id === id
                );


            if (index >= 0) {

                list[index] =
                    newRecipe;

            }

            else {

                list.push(
                    newRecipe
                );

            }


            saveRecipes(list);


            closeRecipeForm();


            displayAdminRecipes();


            displayAllRecipes();


            alert(
                "Recipe saved successfully! 🎉"
            );

        }
    );

}


/* =====================================================
   DELETE RECIPE
===================================================== */

function deleteRecipe(id) {

    const recipe =
        getRecipes().find(
            item => item.id === id
        );


    if (!recipe) return;


    if (
        !confirm(
            `Delete ${recipe.title}?`
        )
    ) {

        return;

    }


    const updated =
        getRecipes().filter(
            item => item.id !== id
        );


    saveRecipes(updated);


    displayAdminRecipes();


    displayAllRecipes();


    alert(
        "Recipe deleted successfully."
    );

}


/* =====================================================
   MODAL OUTSIDE CLICK
===================================================== */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "recipeEditModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeRecipeForm();

        }

    }
);


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        getRecipes();

        displayAllRecipes();

        displaySharedRecipes();

        updateAdminStats();

        setupLogin();

        setupSignup();

        setupAdminForm();

    }
);