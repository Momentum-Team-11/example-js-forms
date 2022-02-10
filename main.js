const form = document.querySelector('#registration-form')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  validateForm()
})

function validateForm() {
  //do something to validate form
  let input = document.querySelector('#email-input')
  console.log(input.value)
}
