document.addEventListener('DOMContentLoaded', function() {
    const saveJournalButton = document.getElementById('save-journal-button');
    const journalDateInput = document.getElementById('journal-date');
    const journalMoodSelect = document.getElementById('journal-mood');
    const journalEntryTextarea = document.getElementById('journal-entry');
    const journalEntriesContainer = document.getElementById('journal-entries');

    // Load saved entries on page load
    loadJournalEntries();

    // Save new journal entry
    saveJournalButton.addEventListener('click', function() {
        const date = journalDateInput.value.trim();
        const mood = journalMoodSelect.value.trim();
        const entry = journalEntryTextarea.value.trim();
        
        if (date && mood && entry) {
            const entryData = { date, mood, entry };
            saveJournalEntry(entryData);
            journalDateInput.value = ''; // Clear the date input
            journalMoodSelect.value = ''; // Clear the mood select
            journalEntryTextarea.value = ''; // Clear the entry textarea
        }
    });

    // Save journal entry to local storage
    function saveJournalEntry(entry) {
        let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        entries.push(entry);
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        loadJournalEntries();
    }

    // Load journal entries from local storage
    function loadJournalEntries() {
        let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        journalEntriesContainer.innerHTML = '';
        entries.forEach(function(entry) {
            const entryElement = document.createElement('div');
            entryElement.className = 'entry mb-2 p-2 border-b border-gray-200';
            entryElement.innerHTML = `<h4 class="font-semibold mb-1">${entry.date} (${entry.mood})</h4><p>${entry.entry}</p>`;
            journalEntriesContainer.appendChild(entryElement);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('add-item-button');
    const addItemInput = document.getElementById('add-gratitude-item');
    const gratitudeList = document.getElementById('gratitude-list');

    addItemButton.addEventListener('click', function() {
        const newItemText = addItemInput.value.trim();
        if (newItemText) {
            // Create a new list item
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            gratitudeList.appendChild(newItem);
            addItemInput.value = ''; // Clear the input field
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addAffirmationButton = document.getElementById('add-affirmation-button');
    const addAffirmationInput = document.getElementById('add-affirmation');
    const affirmationList = document.getElementById('affirmation-list');

    addAffirmationButton.addEventListener('click', function() {
        const newAffirmationText = addAffirmationInput.value.trim();
        if (newAffirmationText) {
            // Create a new list item
            const newAffirmation = document.createElement('li');
            newAffirmation.textContent = newAffirmationText;
            affirmationList.appendChild(newAffirmation);
            addAffirmationInput.value = ''; // Clear the input field
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addGoalButton = document.getElementById('add-goal-button');
    const newGoalInput = document.getElementById('new-goal');
    const goalList = document.getElementById('goal-list');
    const goalProgressSelect = document.getElementById('goal-progress');
    const updateProgressButton = document.getElementById('update-progress-button');
    const progressUpdateInput = document.getElementById('progress-update');

    // Add new goal to the list
    addGoalButton.addEventListener('click', function() {
        const newGoalText = newGoalInput.value.trim();
        if (newGoalText) {
            // Create a new list item
            const newGoal = document.createElement('li');
            newGoal.textContent = newGoalText;
            goalList.appendChild(newGoal);

            // Add the new goal to the progress dropdown
            const newOption = document.createElement('option');
            newOption.textContent = newGoalText;
            newOption.value = newGoalText;
            goalProgressSelect.appendChild(newOption);

            newGoalInput.value = ''; // Clear the input field
        }
    });

    // Update goal progress
    updateProgressButton.addEventListener('click', function() {
        const selectedGoal = goalProgressSelect.value;
        const progressUpdateText = progressUpdateInput.value.trim();
        if (selectedGoal && progressUpdateText) {
            // Example of handling progress update
            alert(`Progress for goal "${selectedGoal}": ${progressUpdateText}`);
            progressUpdateInput.value = ''; // Clear the input field
        } else {
            alert('Please select a goal and enter progress update.');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addReflectionButton = document.getElementById('add-reflection-button');
    const addReflectionInput = document.getElementById('add-reflection');
    const reflectionList = document.getElementById('reflection-list');

    // Add new reflection to the list
    addReflectionButton.addEventListener('click', function() {
        const newReflectionText = addReflectionInput.value.trim();
        if (newReflectionText) {
            // Create a new list item
            const newReflection = document.createElement('li');
            newReflection.textContent = newReflectionText;
            reflectionList.appendChild(newReflection);
            addReflectionInput.value = ''; // Clear the input field
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addIdeaButton = document.getElementById('add-idea-button');
    const newIdeaInput = document.getElementById('new-idea');
    const ideaList = document.getElementById('idea-list');
    const addCategoryIdeaButton = document.getElementById('add-category-idea-button');
    const categoryIdeaInput = document.getElementById('category-idea');
    const ideaCategorySelect = document.getElementById('idea-category');

    // Add new idea to the list
    addIdeaButton.addEventListener('click', function() {
        const newIdeaText = newIdeaInput.value.trim();
        if (newIdeaText) {
            // Create a new list item
            const newIdea = document.createElement('li');
            newIdea.textContent = newIdeaText;
            ideaList.appendChild(newIdea);
            newIdeaInput.value = ''; // Clear the input field
        }
    });

    // Add idea to selected category
    addCategoryIdeaButton.addEventListener('click', function() {
        const selectedCategory = ideaCategorySelect.value;
        const categoryIdeaText = categoryIdeaInput.value.trim();
        if (selectedCategory && categoryIdeaText) {
            // Example of handling categorized idea
            alert(`Idea for category "${selectedCategory}": ${categoryIdeaText}`);
            categoryIdeaInput.value = ''; // Clear the input field
        } else {
            alert('Please select a category and enter an idea.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addNoteButton = document.getElementById('add-note-button');
    const newNoteTitleInput = document.getElementById('new-note-title');
    const newNoteContentInput = document.getElementById('new-note-content');
    const notesList = document.getElementById('notes-list');
    const searchNotesInput = document.getElementById('search-notes');

    // Add new note to the list
    addNoteButton.addEventListener('click', function() {
        const noteTitle = newNoteTitleInput.value.trim();
        const noteContent = newNoteContentInput.value.trim();
        if (noteTitle && noteContent) {
            // Create a new list item
            const newNote = document.createElement('li');
            newNote.innerHTML = `<strong>${noteTitle}:</strong> ${noteContent}`;
            notesList.appendChild(newNote);
            newNoteTitleInput.value = ''; // Clear the title input field
            newNoteContentInput.value = ''; // Clear the content input field
        }
    });

    // Search notes
    searchNotesInput.addEventListener('input', function() {
        const query = searchNotesInput.value.toLowerCase();
        const notesItems = notesList.getElementsByTagName('li');
        Array.from(notesItems).forEach(function(item) {
            const noteText = item.textContent.toLowerCase();
            if (noteText.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
