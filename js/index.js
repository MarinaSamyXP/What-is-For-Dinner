var meals = [
  {
    name: "Caesar Salad",
    imgUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
    description: "Classic salad with crispy romaine and creamy dressing",
    category: "Mediterranean",
    level: "Easy",
    ratingsAverage: 4.4,
    reviews: 198,
    prepTime: 15,
    cookingTime: 0,
    servings: 2,
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.Try Another Recipe",
    ],
    nutritionFacts: {
      calories: 320,
      protein: 12,
      fat: 22,
      carbs: 18,
      fiber: 3,
      sodium: 680,
    },
    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    name: "Margherita Pizza",
    imgUrl:
      "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    category: "Italian",
    level: "Medium",
    ratingsAverage: 4.7,
    reviews: 320,
    prepTime: 20,
    cookingTime: 15,
    servings: 4,
    ingredients: [
      "Pizza dough",
      "1/2 cup tomato sauce",
      "200g mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
    ],
    instructions: [
      "Preheat oven to 220°C.",
      "Spread tomato sauce over rolled dough.",
      "Top with mozzarella slices and basil.",
      "Drizzle with olive oil.",
      "Bake for 15 minutes until crust is golden.",
    ],
    nutritionFacts: {
      calories: 280,
      protein: 14,
      fat: 10,
      carbs: 32,
      fiber: 2,
      sodium: 500,
    },
    tips: [
      "Use fresh mozzarella for best flavor",
      "Bake on a pizza stone for crisp crust",
    ],
  },
  {
    name: "Chicken Biryani",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fragrant rice dish with spiced chicken",
    category: "Indian",
    level: "Hard",
    ratingsAverage: 4.8,
    reviews: 450,
    prepTime: 30,
    cookingTime: 45,
    servings: 6,
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "Onions, tomatoes",
      "Yogurt",
      "Spices (cumin, coriander, garam masala)",
    ],
    instructions: [
      "Marinate chicken with yogurt and spices.",
      "Cook onions and tomatoes until soft.",
      "Add chicken and cook until done.",
      "Layer rice and chicken, steam together.",
    ],
    nutritionFacts: {
      calories: 420,
      protein: 25,
      fat: 15,
      carbs: 50,
      fiber: 4,
      sodium: 700,
    },
    tips: [
      "Soak rice for 30 minutes before cooking",
      "Use saffron for authentic flavor",
    ],
  },
  {
    name: "Beef Burger",
    imgUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "Juicy grilled beef patty with cheese and lettuce",
    category: "American",
    level: "Easy",
    ratingsAverage: 4.6,
    reviews: 600,
    prepTime: 15,
    cookingTime: 10,
    servings: 2,
    ingredients: [
      "200g ground beef",
      "Burger buns",
      "Cheddar cheese",
      "Lettuce, tomato, onion",
      "Ketchup, mustard",
    ],
    instructions: [
      "Shape beef into patties.",
      "Grill until cooked through.",
      "Assemble with buns, cheese, and veggies.",
    ],
    nutritionFacts: {
      calories: 500,
      protein: 28,
      fat: 25,
      carbs: 40,
      fiber: 3,
      sodium: 800,
    },
    tips: [
      "Don't overmix beef to keep patties tender",
      "Toast buns for extra flavor",
    ],
  },
  {
    name: "Sushi Rolls",
    imgUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    description: "Japanese rice rolls with fish and vegetables",
    category: "Japanese",
    level: "Hard",
    ratingsAverage: 4.9,
    reviews: 700,
    prepTime: 40,
    cookingTime: 0,
    servings: 4,
    ingredients: [
      "2 cups sushi rice",
      "Nori sheets",
      "Raw fish (salmon, tuna)",
      "Cucumber, avocado",
      "Soy sauce, wasabi",
    ],
    instructions: [
      "Cook and season sushi rice.",
      "Place rice on nori sheet.",
      "Add fillings and roll tightly.",
      "Slice into pieces and serve.",
    ],
    nutritionFacts: {
      calories: 300,
      protein: 20,
      fat: 8,
      carbs: 40,
      fiber: 2,
      sodium: 600,
    },
    tips: [
      "Use a bamboo mat for rolling",
      "Keep hands wet to prevent sticking",
    ],
  },
  {
    name: "Falafel Wrap",
    imgUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    description: "Middle Eastern wrap with crispy falafel and tahini",
    category: "Middle Eastern",
    level: "Medium",
    ratingsAverage: 4.5,
    reviews: 350,
    prepTime: 25,
    cookingTime: 10,
    servings: 3,
    ingredients: [
      "Chickpeas",
      "Onion, garlic",
      "Spices (cumin, coriander)",
      "Pita bread",
      "Tahini sauce",
    ],
    instructions: [
      "Blend chickpeas with spices.",
      "Shape into balls and fry.",
      "Serve in pita with veggies and tahini.",
    ],
    nutritionFacts: {
      calories: 380,
      protein: 14,
      fat: 18,
      carbs: 40,
      fiber: 6,
      sodium: 500,
    },
    tips: ["Soak chickpeas overnight", "Serve with pickles for extra flavor"],
  },
  {
    name: "Pancakes",
    imgUrl:
      "https://images.unsplash.com/photo-1587339144367-f1cacbecac82?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fluffy breakfast pancakes with syrup",
    category: "American",
    level: "Easy",
    ratingsAverage: 4.6,
    reviews: 420,
    prepTime: 10,
    cookingTime: 15,
    servings: 4,
    ingredients: [
      "2 cups flour",
      "2 eggs",
      "1 cup milk",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "Butter",
      "Maple syrup",
    ],
    instructions: [
      "Mix flour, sugar, and baking powder.",
      "Add eggs and milk, whisk until smooth.",
      "Heat pan with butter.",
      "Pour batter and cook until golden.",
      "Serve with maple syrup.",
    ],
    nutritionFacts: {
      calories: 350,
      protein: 8,
      fat: 12,
      carbs: 50,
      fiber: 2,
      sodium: 300,
    },
    tips: ["Don’t overmix batter", "Cook on medium heat", "Serve warm"],
  },
  {
    name: "Tacos",
    imgUrl:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop",
    description: "Mexican tortillas filled with beef and veggies",
    category: "Mexican",
    level: "Medium",
    ratingsAverage: 4.8,
    reviews: 500,
    prepTime: 20,
    cookingTime: 15,
    servings: 4,
    ingredients: [
      "Tortillas",
      "200g ground beef",
      "Onion, tomato, lettuce",
      "Cheddar cheese",
      "Salsa",
    ],
    instructions: [
      "Cook beef with onion and spices.",
      "Warm tortillas.",
      "Fill with beef, veggies, and cheese.",
      "Top with salsa.",
    ],
    nutritionFacts: {
      calories: 400,
      protein: 20,
      fat: 18,
      carbs: 35,
      fiber: 4,
      sodium: 600,
    },
    tips: ["Use fresh tortillas", "Add guacamole for flavor"],
  },
  {
    name: "Pad Thai",
    imgUrl:
      "https://images.unsplash.com/photo-1637806930600-37fa8892069d?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Thai stir-fried noodles with shrimp",
    category: "Thai",
    level: "Hard",
    ratingsAverage: 4.9,
    reviews: 620,
    prepTime: 25,
    cookingTime: 20,
    servings: 3,
    ingredients: [
      "Rice noodles",
      "Shrimp",
      "Eggs",
      "Bean sprouts",
      "Peanuts",
      "Pad Thai sauce",
    ],
    instructions: [
      "Soak noodles.",
      "Stir-fry shrimp and eggs.",
      "Add noodles and sauce.",
      "Mix with bean sprouts and peanuts.",
    ],
    nutritionFacts: {
      calories: 450,
      protein: 22,
      fat: 14,
      carbs: 60,
      fiber: 5,
      sodium: 700,
    },
    tips: ["Use tamarind paste for authentic flavor", "Serve with lime wedges"],
  },
  {
    name: "Shakshuka",
    imgUrl:
      "https://images.unsplash.com/photo-1697546307745-c05002aa1c1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Eggs poached in spicy tomato sauce",
    category: "Middle Eastern",
    level: "Easy",
    ratingsAverage: 4.7,
    reviews: 300,
    prepTime: 15,
    cookingTime: 20,
    servings: 2,
    ingredients: [
      "Tomatoes",
      "Onion, garlic",
      "Spices (cumin, paprika)",
      "Eggs",
      "Olive oil",
    ],
    instructions: [
      "Cook onion and garlic.",
      "Add tomatoes and spices.",
      "Crack eggs into sauce.",
      "Cover and cook until eggs set.",
    ],
    nutritionFacts: {
      calories: 320,
      protein: 14,
      fat: 18,
      carbs: 20,
      fiber: 4,
      sodium: 500,
    },
    tips: ["Serve with bread", "Don’t overcook eggs"],
  },
  {
    name: "Lasagna",
    imgUrl:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Layered pasta with meat and cheese",
    category: "Italian",
    level: "Hard",
    ratingsAverage: 4.9,
    reviews: 800,
    prepTime: 40,
    cookingTime: 45,
    servings: 6,
    ingredients: [
      "Lasagna sheets",
      "Ground beef",
      "Tomato sauce",
      "Ricotta cheese",
      "Mozzarella",
    ],
    instructions: [
      "Cook beef with sauce.",
      "Layer pasta, beef, and cheese.",
      "Bake until golden.",
    ],
    nutritionFacts: {
      calories: 500,
      protein: 28,
      fat: 20,
      carbs: 50,
      fiber: 3,
      sodium: 700,
    },
    tips: ["Let lasagna rest before cutting", "Use fresh herbs"],
  },
  {
    name: "Ramen",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Japanese noodle soup with broth and toppings",
    category: "Japanese",
    level: "Medium",
    ratingsAverage: 4.8,
    reviews: 550,
    prepTime: 30,
    cookingTime: 20,
    servings: 2,
    ingredients: [
      "Ramen noodles",
      "Broth",
      "Eggs",
      "Pork slices",
      "Green onions",
    ],
    instructions: [
      "Cook noodles.",
      "Prepare broth.",
      "Add noodles and toppings.",
    ],
    nutritionFacts: {
      calories: 420,
      protein: 20,
      fat: 15,
      carbs: 55,
      fiber: 3,
      sodium: 900,
    },
    tips: ["Simmer broth for hours", "Add miso for flavor"],
  },
  {
    name: "Paella",
    imgUrl:
      "https://images.unsplash.com/photo-1650964807311-970cb88d347c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spanish rice dish with seafood",
    category: "Spanish",
    level: "Hard",
    ratingsAverage: 4.9,
    reviews: 400,
    prepTime: 35,
    cookingTime: 40,
    servings: 5,
    ingredients: ["Rice", "Shrimp, mussels", "Peas", "Saffron", "Olive oil"],
    instructions: [
      "Cook rice with saffron.",
      "Add seafood and peas.",
      "Simmer until done.",
    ],
    nutritionFacts: {
      calories: 480,
      protein: 25,
      fat: 16,
      carbs: 60,
      fiber: 4,
      sodium: 800,
    },
    tips: ["Use wide pan", "Don’t stir too much"],
  },
  {
    name: "French Toast",
    imgUrl:
      "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bread soaked in egg and milk, fried",
    category: "French",
    level: "Easy",
    ratingsAverage: 4.6,
    reviews: 250,
    prepTime: 10,
    cookingTime: 10,
    servings: 2,
    ingredients: ["Bread slices", "Eggs", "Milk", "Sugar", "Butter"],
    instructions: [
      "Mix eggs, milk, sugar.",
      "Dip bread slices.",
      "Fry in butter until golden.",
    ],
    nutritionFacts: {
      calories: 300,
      protein: 10,
      fat: 12,
      carbs: 35,
      fiber: 2,
      sodium: 250,
    },
    tips: ["Use thick bread", "Serve with fruit or syrup"],
  },
  {
    name: "Curry",
    imgUrl:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indian chicken curry with spices",
    category: "Indian",
    level: "Medium",
    ratingsAverage: 4.7,
    reviews: 500,
    prepTime: 25,
    cookingTime: 35,
    servings: 4,
    ingredients: [
      "Chicken pieces",
      "Onion, garlic, ginger",
      "Tomatoes",
      "Spices (curry powder, cumin)",
      "Coconut milk",
    ],
    instructions: [
      "Cook onion, garlic, ginger.",
      "Add chicken and brown.",
      "Add tomatoes and spices.",
      "Pour coconut milk and simmer.",
    ],
    nutritionFacts: {
      calories: 420,
      protein: 26,
      fat: 18,
      carbs: 30,
      fiber: 4,
      sodium: 600,
    },
    tips: ["Serve with rice", "Adjust spice to taste"],
  },
  {
    name: "Pho",
    imgUrl:
      "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Vietnamese noodle soup with beef",
    category: "Vietnamese",
    level: "Hard",
    ratingsAverage: 4.9,
    reviews: 700,
    prepTime: 40,
    cookingTime: 60,
    servings: 4,
    ingredients: [
      "Rice noodles",
      "Beef slices",
      "Broth",
      "Bean sprouts",
      "Herbs",
    ],
    instructions: [
      "Prepare broth with spices.",
      "Cook noodles.",
      "Add beef slices and sprouts.",
      "Serve with herbs.",
    ],
    nutritionFacts: {
      calories: 380,
      protein: 22,
      fat: 10,
      carbs: 50,
      fiber: 3,
      sodium: 800,
    },
    tips: ["Simmer broth for hours", "Serve hot with lime"],
  },
  {
    name: "Gnocchi",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661677213294-529bbb8ce5d7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Italian potato dumplings with sauce",
    category: "Italian",
    level: "Medium",
    ratingsAverage: 4.6,
    reviews: 300,
    prepTime: 30,
    cookingTime: 15,
    servings: 3,
    ingredients: ["Potatoes", "Flour", "Egg", "Tomato sauce", "Parmesan"],
    instructions: [
      "Boil potatoes and mash.",
      "Mix with flour and egg.",
      "Shape into dumplings.",
      "Boil and serve with sauce.",
    ],
    nutritionFacts: {
      calories: 350,
      protein: 12,
      fat: 8,
      carbs: 60,
      fiber: 3,
      sodium: 400,
    },
    tips: ["Don’t overwork dough", "Serve immediately"],
  },
  {
    name: "Kebab",
    imgUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Grilled skewers of meat and vegetables",
    category: "Middle Eastern",
    level: "Easy",
    ratingsAverage: 4.7,
    reviews: 450,
    prepTime: 20,
    cookingTime: 15,
    servings: 4,
    ingredients: ["Meat cubes", "Bell peppers", "Onions", "Spices", "Skewers"],
    instructions: [
      "Marinate meat.",
      "Thread onto skewers with veggies.",
      "Grill until cooked.",
    ],
    nutritionFacts: {
      calories: 400,
      protein: 25,
      fat: 15,
      carbs: 20,
      fiber: 3,
      sodium: 500,
    },
    tips: ["Soak wooden skewers", "Serve with yogurt sauce"],
  },
  {
    name: "Quiche",
    imgUrl:
      "https://images.unsplash.com/photo-1591985666643-1ecc67616216?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "French tart with eggs and cheese",
    category: "French",
    level: "Medium",
    ratingsAverage: 4.5,
    reviews: 280,
    prepTime: 25,
    cookingTime: 35,
    servings: 6,
    ingredients: ["Pastry crust", "Eggs", "Cream", "Cheese", "Spinach"],
    instructions: [
      "Prepare crust.",
      "Mix eggs, cream, cheese.",
      "Add spinach.",
      "Bake until set.",
    ],
    nutritionFacts: {
      calories: 370,
      protein: 14,
      fat: 22,
      carbs: 28,
      fiber: 2,
      sodium: 450,
    },
    tips: ["Blind bake crust", "Cool before slicing"],
  },
  {
    name: "Spring Rolls",
    imgUrl:
      "https://media.istockphoto.com/id/2185058260/photo/assorted-of-asian-food-fried-spring-roll-dumpling-samosa-and-soysauce.jpg?s=1024x1024&w=is&k=20&c=05FtNSvN-xS41p_X4IQ3vuFL39jBzMWGlsLtZOipzU4=",
    description: "Crispy rolls with vegetables",
    category: "Chinese",
    level: "Medium",
    ratingsAverage: 4.6,
    reviews: 350,
    prepTime: 25,
    cookingTime: 15,
    servings: 4,
    ingredients: [
      "Spring roll wrappers",
      "Cabbage, carrots",
      "Soy sauce",
      "Oil for frying",
    ],
    instructions: [
      "Prepare filling with veggies.",
      "Wrap in spring roll sheets.",
      "Fry until golden.",
    ],
    nutritionFacts: {
      calories: 300,
      protein: 8,
      fat: 12,
      carbs: 40,
      fiber: 3,
      sodium: 500,
    },
    tips: ["Seal edges well", "Serve with dipping sauce"],
  },
];

var dinner = document.getElementById("dinner");
var lastMeal = null;
function generateRandomMeal() {
  var randomMeal;
  do {
    var randomNumber = Math.trunc(Math.random() * meals.length);
    randomMeal = meals[randomNumber];
  } while (randomMeal === lastMeal);

  lastMeal = randomMeal;
  return randomMeal;
}

var randomMeal = generateRandomMeal();

function displayMeal(randomMeal) {
  var ingredientsList = "";
  for (var i = 0; i < randomMeal.ingredients.length; i++) {
    ingredientsList += `
                 <li class="d-flex mb-3">
                      <div class="num rounded-circle text-white fw-bold">${i + 1}</div>
                      <span>${randomMeal.ingredients[i]}</span>
                    </li>
        `;
  }
  var instructionsList = "";
  for (var i = 0; i < randomMeal.instructions.length; i++) {
    instructionsList += `
 <div class="d-flex mb-4 align-items-center">
    <div class="number text-white fw-bold rounded-4">${i + 1}</div>
      <p class="mb-0">
     ${randomMeal.instructions[i]}
        </p>
    </div>
    `;
  }

  var tipsList = "";
  for (var i = 0; i < randomMeal.tips.length; i++) {
    tipsList += `
  <div class="tips p-3 rounded-4 mb-3 d-flex">
                    <i
                      class="fa-solid fa-check rounded-circle d-flex justify-content-center align-items-center"
                    ></i>
                    <p>${randomMeal.tips[i]}</p>
                  </div>
`;
  }
  var mealCard = `  <div class="col-12 col-lg-5">
            <div class="dinner-image position-relative">
              <img
                class="img-fluid object-fit-cover w-100"
                src="${randomMeal.imgUrl}"
                alt="${randomMeal.name}"
              />
              <div
                class="reviews py-2 px-3 rounded-pill position-absolute bg-white"
              >
                <i class="text-warning fa-solid fa-star"></i>
                <span class="me-2 fw-semibold">${randomMeal.ratingsAverage}</span>
                <span class="cg fs-14">(${randomMeal.reviews} reviews)</span>
              </div>
              <div
                class="overflow-hidden meal-info rounded-4 bg-white position-absolute d-flex justify-content-around align-content-center"
              >
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-clock m-0 main-color"></i>
                  <span class="m-0 fs-12 cg">Prep Time</span>
                  <p class="m-0 fs-14 fw-bold">${randomMeal.prepTime} mins</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-fire-burner m-0"></i>
                  <span class="m-0 fs-12 cg">Cook Time</span>
                  <p class="m-0 fs-14 fw-bold">${randomMeal.cookingTime} mins</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-users m-0"></i>
                  <span class="m-0 fs-12 cg">Servings</span>
                  <p class="m-0 fs-14 fw-bold">${randomMeal.servings} people</p>
                </div>
              </div>
            </div>
          </div>
          <div class="dinner-content col-12 col-lg-7">
            <div
              class="mb-4 d-flex flex-column flex-lg-row-reverse g-5 justify-content-between"
            >
              <div class="d-flex gap-2 justify-content-end">
                <i
                  class="fa-solid fa-bookmark rounded-4 d-flex align-items-center justify-content-center"
                ></i>
                <i
                  class="fa-solid fa-share-nodes rounded-4 d-flex align-items-center justify-content-center"
                ></i>
              </div>
              <div>
                <div class="mb-12">
                  <span class="easy rounded-pill fw-semibold fs-12">${randomMeal.level}</span>
                  <span class="Mediterranean rounded-pill fs-12 fw-semibold"
                    >${randomMeal.category}</span
                  >
                </div>
                <h2 class="fs-24 fw-bold mb-2">${randomMeal.name}</h2>
                <p class="color-gray fs-14">
                  ${randomMeal.description}
                </p>
              </div>
            </div>
            <ul
              class="nav nav-tabs mb-4 justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item p-3" role="presentation">
                <button
                  class="nav-link fs-12 fw-semibold active p-0"
                  id="ingredients-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ingredients-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="ingredients-tab-pane"
                  aria-selected="true"
                >
                  <i class="fa-solid fa-list-check"></i>
                  Ingredients
                </button>
              </li>
              <li class="nav-item p-3" role="presentation">
                <button
                  class="nav-link fs-12 fw-semibold p-0"
                  id="instructions-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#instructions-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="instructions-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-book-open"></i>
                  Instructions
                </button>
              </li>
              <li class="nav-item p-3" role="presentation">
                <button
                  class="nav-link fs-12 fw-semibold p-0"
                  id="nutrition-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nutrition-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="nutrition-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-chart-pie"></i>
                  Nutrition
                </button>
              </li>
              <li class="nav-item p-3" role="presentation">
                <button
                  class="nav-link fs-12 fw-semibold p-0"
                  id="chef-tips-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#chef-tips-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="chef-tips-tab-pane"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-lightbulb"></i>
                  Chef Tips
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="ingredients-tab-pane"
                role="tabpanel"
                aria-labelledby="ingredients-tab"
                tabindex="0"
              >
                <div class="ingredients rounded-4 p-4">
                  <ul>
                  ${ingredientsList}
                  </ul>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="instructions-tab-pane"
                role="tabpanel"
                aria-labelledby="instructions-tab"
                tabindex="0"
              >
                <div class="instructions ">
                 ${instructionsList}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nutrition-tab-pane"
                role="tabpanel"
                aria-labelledby="nutrition-tab"
                tabindex="0"
              >
                <div class="nutrition row g-4">
                  <div class="col-12 col-lg-6">
                    <div
                      class="Calories p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-fire d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Calories</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.calories} kcal</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div
                      class="Protein p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-dumbbell d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Protein</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.protein} g</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div
                      class="Carbohydrates p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-wheat-awn d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Carbohydrates</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.carbs} g</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div
                      class="Fat p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-droplet d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Fat</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.fat} g</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div
                      class="Fiber p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-seedling d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Fiber</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.fiber} g</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div
                      class="Sodium p-3 rounded-4 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <i
                          class="rounded-3 fa-solid fa-cube d-flex justify-content-center align-items-center"
                        ></i>
                        <p class="fs-14 fw-bold mb-0">Sodium</p>
                      </div>
                      <span class="text-black fw-bold">${randomMeal.nutritionFacts.sodium} mg</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="chef-tips-tab-pane"
                role="tabpanel"
                aria-labelledby="chef-tips-tab"
                tabindex="0"
              >
                <div class="chef-tips">
                ${tipsList}
                </div>
              </div>
            </div>
           <div class="button pt-4">
          <button
            type="button"
            class="btn fw-semibold text-white rounded-4"
            onclick="displayMeal(generateRandomMeal())"
          >
            <i class="fa-solid fa-rotate me-2"></i>Try Another Recipe
          </button>
        </div>
          </div>`;
  dinner.innerHTML = mealCard;
}

displayMeal(randomMeal);
