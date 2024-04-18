document.addEventListener('DOMContentLoaded', function () {
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
});

// Retrieve checkbox state from local storage
function loadCheckboxState() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const savedState = localStorage.getItem('checkboxState');
    if (savedState) {
        const checkboxState = JSON.parse(savedState);
        if (checkboxState.date === today) {
            // Apply saved state to checkboxes
            for (const checkboxId in checkboxState) {
                if (checkboxId !== 'date') {
                    const checkbox = document.getElementById(checkboxId);
                    if (checkbox) {
                        checkbox.checked = checkboxState[checkboxId];
                    }
                }
            }
        } else {
            // Clear old state if it's from a previous day
            localStorage.removeItem('checkboxState');
        }
    }
}

// Save checkbox state to local storage
function saveCheckboxState() {
    const checkboxState = { date: new Date().toISOString().split('T')[0] }; // Store today's date
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkboxState[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
}

// Load checkbox state when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadCheckboxState();
});

// Save checkbox state when checkboxes are clicked
document.addEventListener('change', () => {
    saveCheckboxState();
});