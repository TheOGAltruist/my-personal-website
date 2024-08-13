// first declare a variable with the required verbiage
// display the alert

//creating first variable with the required verbiage
const welcomeSentence = "Hello World"

// displaying via console.log
console.log(welcomeSentence)

// form control
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/success.html'
})