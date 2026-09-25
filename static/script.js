// -------------------------
// CALORIE PREDICTION
// -------------------------

function predictCalories() {

    const food = document.getElementById("foodName");
    const quantity = document.getElementById("quantity");

    if (!food || !quantity) {
        return;
    }

    const foodName = food.value.trim();
    const amount = Number(quantity.value);

    if (!foodName || !amount) {
        alert("Please enter food name and quantity.");
        return;
    }

    // Temporary frontend calculation
    // Later this will come from your ML model / Flask API.

    const calories = Math.round(amount * 2.4);
    const protein = Math.round(amount * 0.08);
    const carbs = Math.round(amount * 0.25);
    const fat = Math.round(amount * 0.05);

    document.getElementById("calorieResult").innerText = calories;
    document.getElementById("proteinResult").innerText = protein + "g";
    document.getElementById("carbsResult").innerText = carbs + "g";
    document.getElementById("fatResult").innerText = fat + "g";
}


// -------------------------
// MEAL DIARY
// -------------------------

let totalCalories = 0;


function addMeal() {

    const name = document.getElementById("mealName");
    const type = document.getElementById("mealType");
    const calories = document.getElementById("mealCalories");
    const table = document.getElementById("mealTable");

    if (!name || !type || !calories || !table) {
        return;
    }

    if (!name.value || !calories.value) {
        alert("Please enter meal details.");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name.value}</td>

        <td>${type.value}</td>

        <td>${calories.value} kcal</td>

        <td>
            <button
                class="secondary-btn"
                onclick="this.parentElement.parentElement.remove()">
                Delete
            </button>
        </td>
    `;

    table.appendChild(row);

    totalCalories += Number(calories.value);

    document.getElementById("totalCalories").innerText =
        totalCalories;

    name.value = "";
    calories.value = "";
}


// -------------------------
// FOOD ANALYSIS
// -------------------------

function analyzeFood() {

    const input = document.getElementById("analysisFood");
    const result = document.getElementById("analysisResult");

    if (!input || !result) {
        return;
    }

    const food = input.value.trim();

    if (!food) {
        alert("Please enter a food item.");
        return;
    }

    result.innerHTML = `

        <div class="analysis-content">

            <div class="feature-icon">
                🥗
            </div>

            <h2>${food}</h2>

            <p>
                Nutritional analysis generated for this food.
            </p>

            <div class="macro-cards">

                <div>
                    <span>Calories</span>
                    <strong>240 kcal</strong>
                </div>

                <div>
                    <span>Protein</span>
                    <strong>12g</strong>
                </div>

                <div>
                    <span>Carbs</span>
                    <strong>28g</strong>
                </div>

            </div>

            <br>

            <p>
                💡 This food can be included as part of a
                balanced nutrition plan.
            </p>

        </div>

    `;
}