document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = "";
    const name = document.getElementById('name').value;
    const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value, 10);
    const liveInUS = document.getElementById('liveInUS').checked;
    const zipcode = document.getElementById('zipcode').value;
    const password = document.getElementById('password').value;
    const pizzaPreference = document.querySelector('input[name="pizzaPreference"]:checked');

    if (!name || name.length < 3) {
        errors += "Name must be at least 3 characters long.\n";
    }

    if (!yearOfBirth || yearOfBirth <= 1900 || yearOfBirth >= 2100) {
        errors += "Year of Birth must be between 1901 and 2099.\n";
    }

    if (liveInUS && (!zipcode || !/^\d{5}$/.test(zipcode))) {
        errors += "Zipcode is required and must be 5 digits.\n";
    }


    if (!password || password.length < 8) {
        errors += "Password must be at least 8 characters long.\n";
    }

  
    if (!pizzaPreference) {
        errors += "You must select a preferred type of pizza.\n";
    }


    const messageDiv = document.getElementById('message');
    if (errors) {
        messageDiv.textContent = "Please correct the following errors:\n" + errors;
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Accepted";
        messageDiv.style.color = "green";
    }
});