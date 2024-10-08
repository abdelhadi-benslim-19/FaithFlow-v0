// Function to load workouts
const workouts = {
    gym: [
        { name: "Bench Press", details: "3 sets of 10 reps" },
        { name: "Squats", details: "4 sets of 8 reps" },
        // Add more gym workouts
    ],
    running: [
        { name: "5K Run", details: "Maintain a steady pace" },
        { name: "Interval Sprints", details: "5x 1-minute sprints with 2 minutes rest" },
        // Add more running workouts
    ]
};

function displayWorkouts() {
    const container = document.getElementById('workouts-container');
    
    for (const [category, exercises] of Object.entries(workouts)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'workout-category mb-8';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'text-2xl font-bold text-[#013C38] mb-4';
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Workouts';
        categoryDiv.appendChild(categoryTitle);

        const workoutList = document.createElement('div');
        workoutList.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

        exercises.forEach(exercise => {
            const workoutItem = document.createElement('div');
            workoutItem.className = 'workout-item bg-white p-6 rounded-lg shadow-lg text-center';

            workoutItem.innerHTML = `<h3 class="text-xl font-semibold text-[#D6DF36] mb-2">${exercise.name}</h3><p class="text-md text-[#013C38]">${exercise.details}</p>`;
            workoutList.appendChild(workoutItem);
        });

        categoryDiv.appendChild(workoutList);
        container.appendChild(categoryDiv);
    }
}

document.addEventListener('DOMContentLoaded', displayWorkouts);

document.addEventListener('DOMContentLoaded', () => {
    const nutritionForm = document.getElementById('nutrition-form');
    const nutritionList = document.getElementById('nutrition-list');

    // Handle form submission
    nutritionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the nutrition details
        const foodName = document.getElementById('food-name').value.trim();
        const calories = document.getElementById('calories').value.trim();
        const protein = document.getElementById('protein').value.trim();
        const carbs = document.getElementById('carbs').value.trim();
        const fat = document.getElementById('fat').value.trim();

        // Validate input
        if (foodName === '' || calories === '' || protein === '' || carbs === '' || fat === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <strong>${foodName}</strong>:
                    <div>Calories: ${calories}</div>
                    <div>Protein: ${protein}g</div>
                    <div>Carbs: ${carbs}g</div>
                    <div>Fat: ${fat}g</div>
                </div>
                <button class="bg-red-500 text-white text-xs ml-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new nutrition info to the list
        nutritionList.appendChild(listItem);

        // Clear the form
        nutritionForm.reset();
    });

    // Handle delete button clicks
    nutritionList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            nutritionList.removeChild(listItem);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hydrationForm = document.getElementById('hydration-form');
    const hydrationList = document.getElementById('hydration-list');

    // Handle form submission
    hydrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the hydration details
        const drinkName = document.getElementById('drink-name').value.trim();
        const volume = document.getElementById('volume').value.trim();

        // Validate input
        if (drinkName === '' || volume === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <strong>${drinkName}</strong>: ${volume} ml
                </div>
                <button class="bg-red-500 text-white text-xs ml-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new hydration info to the list
        hydrationList.appendChild(listItem);

        // Clear the form
        hydrationForm.reset();
    });

    // Handle delete button clicks
    hydrationList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            hydrationList.removeChild(listItem);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sleepForm = document.getElementById('sleep-form');
    const sleepList = document.getElementById('sleep-list');

    // Function to calculate sleep duration
    function calculateSleepDuration(start, end) {
        const startDate = new Date(`1970-01-01T${start}`);
        const endDate = new Date(`1970-01-01T${end}`);

        if (endDate < startDate) {
            endDate.setDate(endDate.getDate() + 1); // Adjust for overnight sleep
        }

        const duration = (endDate - startDate) / (1000 * 60 * 60); // Duration in hours
        return duration.toFixed(2); // Return formatted duration
    }

    // Handle form submission
    sleepForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get sleep details
        const sleepDate = document.getElementById('sleep-date').value.trim();
        const sleepStart = document.getElementById('sleep-start').value.trim();
        const sleepEnd = document.getElementById('sleep-end').value.trim();

        // Validate input
        if (sleepDate === '' || sleepStart === '' || sleepEnd === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Calculate sleep duration
        const duration = calculateSleepDuration(sleepStart, sleepEnd);

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <strong>${sleepDate}</strong>: ${sleepStart} - ${sleepEnd} (${duration} hours)
                </div>
                <button class="bg-red-500 text-white text-xs ml-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new sleep record to the list
        sleepList.appendChild(listItem);

        // Clear the form
        sleepForm.reset();
    });

    // Handle delete button clicks
    sleepList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            sleepList.removeChild(listItem);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const progressForm = document.getElementById('progress-form');
    const progressList = document.getElementById('progress-list');

    // Handle form submission
    progressForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get progress details
        const progressDate = document.getElementById('progress-date').value.trim();
        const progressWeight = document.getElementById('progress-weight').value.trim();
        const progressHeight = document.getElementById('progress-height').value.trim();
        const progressNotes = document.getElementById('progress-notes').value.trim();

        // Validate input
        if (progressDate === '' || progressWeight === '' || progressHeight === '') {
            alert('Please fill out all required fields.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex flex-col">
                <div><strong>Date:</strong> ${progressDate}</div>
                <div><strong>Weight:</strong> ${progressWeight} kg</div>
                <div><strong>Height:</strong> ${progressHeight} cm</div>
                <div><strong>Notes:</strong> ${progressNotes || 'N/A'}</div>
                <button class="bg-red-500 text-white text-xs mt-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new progress record to the list
        progressList.appendChild(listItem);

        // Clear the form
        progressForm.reset();
    });

    // Handle delete button clicks
    progressList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            progressList.removeChild(listItem);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const challengeForm = document.getElementById('challenge-form');
    const challengeList = document.getElementById('challenge-list');

    // Handle form submission
    challengeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get challenge details
        const challengeName = document.getElementById('challenge-name').value.trim();
        const challengeDescription = document.getElementById('challenge-description').value.trim();
        const challengeStartDate = document.getElementById('challenge-start-date').value.trim();
        const challengeEndDate = document.getElementById('challenge-end-date').value.trim();

        // Validate input
        if (challengeName === '' || challengeDescription === '' || challengeStartDate === '' || challengeEndDate === '') {
            alert('Please fill out all required fields.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex flex-col">
                <div><strong>Name:</strong> ${challengeName}</div>
                <div><strong>Description:</strong> ${challengeDescription}</div>
                <div><strong>Start Date:</strong> ${challengeStartDate}</div>
                <div><strong>End Date:</strong> ${challengeEndDate}</div>
                <button class="bg-red-500 text-white text-xs mt-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new challenge to the list
        challengeList.appendChild(listItem);

        // Clear the form
        challengeForm.reset();
    });

    // Handle delete button clicks
    challengeList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            challengeList.removeChild(listItem);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tipsForm = document.getElementById('tips-form');
    const tipsList = document.getElementById('tips-list');

    // Handle form submission
    tipsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get tip details
        const tipTitle = document.getElementById('tip-title').value.trim();
        const tipDescription = document.getElementById('tip-description').value.trim();

        // Validate input
        if (tipTitle === '' || tipDescription === '') {
            alert('Please fill out all required fields.');
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'p-2', 'border', 'rounded');
        listItem.innerHTML = `
            <div class="flex flex-col">
                <div><strong>Title:</strong> ${tipTitle}</div>
                <div><strong>Description:</strong> ${tipDescription}</div>
                <button class="bg-red-500 text-white text-xs mt-2 p-1 rounded hover:bg-red-600 delete-btn">Delete</button>
            </div>
        `;

        // Add the new tip to the list
        tipsList.appendChild(listItem);

        // Clear the form
        tipsForm.reset();
    });

    // Handle delete button clicks
    tipsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement.parentElement;
            tipsList.removeChild(listItem);
        }
    });
});

// Variables to hold the selected drink type and amount
let selectedDrink = "Water";
let selectedAmount = 250;
let totalIntake = 200;
let intakeGoal = 2000;

document.getElementById("addWaterButton").addEventListener("click", function() {
    document.getElementById("waterModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("waterModal").classList.add("hidden");
});

// Handle drink option selection
document.querySelectorAll(".drink-option").forEach(button => {
    button.addEventListener("click", function() {
        selectedDrink = this.getAttribute("data-drink");
        console.log(`Selected drink: ${selectedDrink}`);
    });
});

// Handle slider input
document.getElementById("waterAmountSlider").addEventListener("input", function() {
    selectedAmount = this.value;
    document.getElementById("amountDisplay").textContent = `${selectedAmount} ml`;
});

// Add drink to total intake
document.getElementById("addDrinkButton").addEventListener("click", function() {
    totalIntake += parseInt(selectedAmount);
    let remaining = intakeGoal - totalIntake;

    document.getElementById("remainingAmount").textContent = `${selectedAmount}ml`;
    document.getElementById("totalRemaining").textContent = `${remaining}ml remaining`;

    // Adjust water level height in bottle graphic
    let waterLevelHeight = (totalIntake / intakeGoal) * 100;
    document.getElementById("waterLevel").style.height = `${waterLevelHeight}%`;

    document.getElementById("waterModal").classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const coreChart = document.getElementById("chart-core").querySelector(".bg-green-600");
    const remChart = document.getElementById("chart-rem").querySelector(".bg-orange-400");
    const postRemChart = document.getElementById("chart-post-rem").querySelector(".bg-yellow-400");

    const chartData = {
        today: { core: '66%', rem: '50%', postRem: '33%' },
        week: { core: '70%', rem: '55%', postRem: '40%' },
        month: { core: '75%', rem: '60%', postRem: '45%' },
        year: { core: '80%', rem: '65%', postRem: '50%' },
        all: { core: '85%', rem: '70%', postRem: '60%' },
    };

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove("bg-green-500"));
            button.classList.add("bg-green-500");

            // Update chart based on selected period
            const period = button.dataset.period;
            coreChart.style.width = chartData[period].core;
            remChart.style.width = chartData[period].rem;
            postRemChart.style.width = chartData[period].postRem;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.querySelector('.add-item');
    const addItemModal = document.getElementById('addItemModal');
    const closeModalButton = document.getElementById('closeModal');
    const saveItemButton = document.getElementById('saveItem');
    const foodNameInput = document.getElementById('foodName');
    const foodCaloriesInput = document.getElementById('foodCalories');

    // Function to clear input fields
    function clearInputs() {
        foodNameInput.value = '';
        foodCaloriesInput.value = '';
    }

    // Open the modal and clear inputs
    addItemButton.addEventListener('click', () => {
        clearInputs();  // Clear inputs when opening the modal
        addItemModal.classList.remove('hidden');
    });

    // Close the modal
    closeModalButton.addEventListener('click', () => {
        clearInputs();  // Clear inputs when closing the modal
        addItemModal.classList.add('hidden');
    });

    // Save the item and add a new card
    saveItemButton.addEventListener('click', () => {
        const foodName = foodNameInput.value;
        const foodCalories = foodCaloriesInput.value;

        // Create a new food card
        const newCard = document.createElement('div');
        newCard.className = 'bg-teal-700 rounded-lg p-2 flex flex-col items-center text-white';
        newCard.innerHTML = `
            <div class="w-16 h-16 bg-teal-600 rounded-full mb-2 flex items-center justify-center">
                <span>🍴</span> <!-- You can customize the icon here -->
            </div>
            <div>${foodCalories} kcal</div>
        `;

        // Insert the new card before the "Add Item" card
        addItemButton.parentNode.insertBefore(newCard, addItemButton);

        // Clear the modal inputs after saving the item
        clearInputs();

        // Close the modal
        addItemModal.classList.add('hidden');
    });
});
