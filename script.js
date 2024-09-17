function checkEligibility() {
    const ageInput = document.getElementById('age').value;
    const resultElement = document.getElementById('result');
    const age = parseInt(ageInput, 10);

    if (isNaN(age)) {
        resultElement.textContent = 'Please enter a valid age.';
    } else if (age >= 18) {
        resultElement.textContent = 'You are eligible to vote.';
    } else if (age >= 0) {
        resultElement.textContent = 'You are not eligible to vote.';
    } else {
        resultElement.textContent = 'Invalid age input.';
    }
}
