
const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");

function showPopup(event) {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
        document.getElementById("popupFirstName").innerText = document.getElementById("firstName").value;
        document.getElementById("popupLastName").innerText = document.getElementById("lastName").value;
        document.getElementById("popupDob").innerText = document.getElementById("dob").value;
        document.getElementById("popupCountry").innerText = document.getElementById("country").value;

        const genderElements = document.querySelectorAll('input[name="gender"]:checked');
        const genderValues = Array.from(genderElements).map(element => element.value);
        document.getElementById("popupGender").innerText = genderValues.join(", ");

        document.getElementById("popupProfession").innerText = document.getElementById("profession").value;
        document.getElementById("popupEmail").innerText = document.getElementById("email").value;
        document.getElementById("popupMobile").innerText = document.getElementById("mobile").value;

        popup.style.display = "block";
    }
}

function closePopup() {
    popup.style.display = "none";
    form.reset();
}

function validateForm() {
    clearErrors();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const country = document.getElementById("country").value;
    const gender = validateGender();
    const profession = validateProfession();

    let valid = true;

    if (!firstName) {
        displayError("errorFirstName", "Please enter a valid First Name.");
        valid = false;
    }

    if (!lastName) {
        displayError("errorLastName", "Please enter a valid Last Name.");
        valid = false;
    }

    if (!dob) {
        displayError("errorDob", "Please enter a valid Date of Birth.");
        valid = false;
    }

    if (!country) {
        displayError("errorCountry", "Please select a Country.");
        valid = false;
    }

    if (!gender) {
        displayError("errorGender", "Please select a gender.");
        valid = false;
    }

    if (!profession) {
        displayError("errorProfession", "Please enter a valid profession.");
        valid = false;
    }

    if (!email || !isValidEmail(email)) {
        displayError("errorEmail", "Please enter a valid Email address.");
        valid = false;
    }

    if (!mobile || !isValidMobile(mobile)) {
        displayError("errorMobile", "Please enter a valid Mobile Number (10 digits).");
        valid = false;
    }

    return valid;
}

function validateGender() {
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    return male.checked || female.checked;
}

function validateProfession() {
    const profession = document.getElementById("profession").value;
    return profession.trim().length > 0;
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.textContent = "");
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}