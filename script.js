document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting

    const roll = document.getElementById('roll').value;
    const password = document.getElementById('password').value;

    // Define valid roll and password combinations
    const validCombinations = {
        "1": "100",
        "2": "101",
        "3": "102",
        "4": "103",
        "5": "105",
        "6": "104",
        "7": "106",
        "8": "107"
    };

    if (validCombinations[roll] && validCombinations[roll] === password) {
        // Redirect to YouTube if roll and password combination is correct
        window.location.href = 'https://www.youtube.com';
    } else {
        // Display error message
        document.getElementById('message').textContent = 'Incorrect roll or password. Please pay or die.';
    }
});
