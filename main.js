const form = document.querySelector('#registration-form')
const msgDiv = document.querySelector('#msg')
let formIsValid // this is set as a global variable so it can be used in different functions

form.addEventListener('submit', function (event) {
  event.preventDefault()
  validateForm()
})

function validateForm() {
  removeMessage() // if a message is showing from a previous validation attempt
  formIsValid = true // reset this each time you try to validate the form

  validateAge()
  confirmPasswordMatch()
  // create some more functions to validate more form fields

  if (formIsValid) {
    // submit form via AJAX
    showMessage('Form submitted successfully!', 'success')
  }
}

function validateAge() {
  const ageInput = document.querySelector('#age-input')

  if (ageInput.value >= 18) {
    console.log('age is valid')
  } else {
    formIsValid = false
    showMessage('You must be 18 or older', 'danger')
  }
}

function confirmPasswordMatch() {
  // grab the password input
  const password = document.querySelector('#password-input')
  // grab the confirm password input
  const confirmPwd = document.querySelector('#confirm-password')
  confirmPwd.classList.remove('is-danger') // if it's there from before

  // compare their values to see if they match
  if (password.value !== confirmPwd.value) {
    // show an error message on the page
    showMessage('Your passwords must match', 'danger')
    confirmPwd.classList.add('is-danger')
    formIsValid = false
  }
}

function removeMessage() {
  if (msgDiv) {
    msgDiv.innerHTML = ''
  }
}

function showMessage(message, state) {
  msgDiv.innerHTML = `<div class="notification is-${state}">${message}</div>`
}
