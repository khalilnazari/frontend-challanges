// hundle submit
const signupForm = document.querySelector('#signup-form'); 
signupForm.addEventListener('submit', e => {
    e.preventDefault(); 

    const firstName = document.querySelector('#first-name'); 
    const lastName = document.querySelector('#last-name'); 
    const email = document.querySelector('#email'); 
    const password = document.querySelector('#password'); 
    
    // Valid first name
    const validFirstName = validateTextFeild(firstName.value, "First Name");
    displayError(firstName, validFirstName)

    // Valid last name
    const validLastName = validateTextFeild(lastName.value, "Last Name");
    displayError(lastName, validLastName)

    // validate email
    const validEmail = validateEmail(email.value); 
    displayError(email, validEmail);
    
    // validate password
    const validPassword = validatePassword(password.value, 8); 
    displayError(password, validPassword);

})

// validate password
function validatePassword(password, minlength) {

    if (!password) return 'Password is required';
  
    if (password.length < minlength) {
      return `Please enter a password that's at least ${minlength} characters long`;
    }
  
    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
      return 'Please use at least one capital letter.';
    }
  
    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
      return 'Please use at least one number.';
    }
  
    return '';
}

// validate email 
function validateEmail(email) {
    if (!email) return 'Email is required';
    
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
        return 'Please enter a valid email';
    }

    return '';
}

// normal textfield
function validateTextFeild (value, filedName) {
    if(!value) {
        return filedName+' is required!'
    } 
    return '';
}
// display error message
function displayError(field, message) {
    if(message) {
        field.nextElementSibling.innerHTML = message;
    } else {
        field.nextElementSibling.innerHTML = ""
    }
}