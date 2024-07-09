document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('myInput');
    const errorMessage = document.getElementById('errorMessage');
    const errorIcon = document.getElementById('errorIcon');

    if (!emailInput.value) {
        // If the input field is empty
        errorMessage.textContent = 'The email field cannot be empty.';
        errorMessage.style.display = 'inline';
        errorIcon.style.display = 'inline';
        emailInput.classList.add('error');
        //function calls the Regex
    } else if (!validateEmail(emailInput.value)) {
        // If the email address is not formatted correctly
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'inline';
        emailInput.classList.add('error');
    } else {
        // If the email is valid
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
        emailInput.classList.remove('error');
        // You can submit the form or handle the successful validation here
        alert('Email submitted successfully.');
        // document.getElementById('emailForm').submit(); // Uncomment to submit the form
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
