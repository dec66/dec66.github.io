function displaySectionForToday() {
    const today = new Date().getDay();
    switch (today) {
        case 1:
            document.getElementById('monday').style.display = 'block';
            break;
        case 2:
            document.getElementById('tuesday').style.display = 'block';
            break;
        case 3:
            document.getElementById('wednesday').style.display = 'block';
            break;
        case 4:
            document.getElementById('thursday').style.display = 'block';
            break;
        case 5:
            document.getElementById('friday').style.display = 'block';
            break;
        case 6:
            document.getElementById('saturday').style.display = 'block';
            break;
        case 0:
            document.getElementById('sunday').style.display = 'block';
            break;
    }
}

function toggleAllSections() {
    const sections = document.querySelectorAll('.day-content');
    sections.forEach(section => {
        if (section.style.display === 'block') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    })
    displaySectionForToday();
}

// Retrieve checkbox state from local storage
function loadCheckboxState() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const savedState = localStorage.getItem('checkboxState');
    if (savedState) {
        const checkboxState = JSON.parse(savedState);
        if (checkboxState.date === today) {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox, index) => {
                const checkboxKey = `checkbox_${index}`;
                if (checkboxState.hasOwnProperty(checkboxKey)) {
                    checkbox.checked = checkboxState[checkboxKey];
                }
            });
        } else {
            // Clear old state if it's from a previous day
            localStorage.removeItem('checkboxState');
        }
    }
}

// Save checkbox state to local storage
function saveCheckboxState() {
    try {
        const checkboxState = { date: new Date().toISOString().split('T')[0] }; // Store today's date
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkboxState[`checkbox_${index}`] = checkbox.checked;
        });
        localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
    } catch (error) {
        console.error('Error saving checkbox state:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadCheckboxState();
    displaySectionForToday();
});

// Save checkbox state when checkboxes are clicked
document.addEventListener('change', () => {
    saveCheckboxState();
});