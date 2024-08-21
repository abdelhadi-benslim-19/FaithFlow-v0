// workouts.js

// Sample workout data
const workoutsData = [
    {
        title: "Full Body Workout",
        description: "A comprehensive workout targeting all major muscle groups.",
        exercises: [
            "Push-ups",
            "Squats",
            "Lunges",
            "Plank",
            "Jumping Jacks"
        ]
    },
    {
        title: "Upper Body Strength",
        description: "Focus on building strength in your upper body.",
        exercises: [
            "Pull-ups",
            "Bicep Curls",
            "Tricep Dips",
            "Shoulder Press",
            "Chest Press"
        ]
    },
    {
        title: "Lower Body Blast",
        description: "Strengthen and tone your lower body with these exercises.",
        exercises: [
            "Deadlifts",
            "Leg Press",
            "Calf Raises",
            "Glute Bridges",
            "Leg Extensions"
        ]
    }
];

// Function to generate workout content dynamically
function loadWorkouts() {
    const workoutsContainer = document.getElementById('workouts');
    workoutsContainer.innerHTML = ""; // Clear any existing content

    workoutsData.forEach(workout => {
        const workoutDiv = document.createElement('div');
        workoutDiv.classList.add('workout');

        const title = document.createElement('h3');
        title.classList.add('text-lg', 'font-bold', 'mb-2');
        title.textContent = workout.title;

        const description = document.createElement('p');
        description.classList.add('mb-2');
        description.textContent = workout.description;

        const exercisesList = document.createElement('ul');
        exercisesList.classList.add('list-disc', 'ml-4');

        workout.exercises.forEach(exercise => {
            const listItem = document.createElement('li');
            listItem.textContent = exercise;
            exercisesList.appendChild(listItem);
        });

        workoutDiv.appendChild(title);
        workoutDiv.appendChild(description);
        workoutDiv.appendChild(exercisesList);
        workoutsContainer.appendChild(workoutDiv);
    });
}

// Run the function to load workouts when the page loads
document.addEventListener('DOMContentLoaded', loadWorkouts);

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
