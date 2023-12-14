let FormData = document.querySelector('.form')
let sumbitButton = document.querySelector('.button')
let errorMessages = document.querySelectorAll('.error-message')
let emptyFieldMessages = document.querySelectorAll('.empty-field')
let showPassword = document.querySelector('.btn')
let firstName, lastName, email, password
let field
let fnFlag,lnFlag,eFlag,PwdFlag;
let fnTarget, lnTarget, emailTarget, pwdTarget
let nameRegx = /^[a-z]+$/i
let emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
let pwdRegx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
for (let errorMessage of errorMessages) {
  errorMessage.classList.add('d-none')
}

for (let emptyFieldMessage of emptyFieldMessages) {
  emptyFieldMessage.classList.add('d-none')
}

FormData.addEventListener('keyup', (event) => {
  event.preventDefault()
  // console.log(event.target.dataset.key)
  // console.log(event.target)
  //console.log(event.target.value);
  field = event.target.dataset.key
  switch (field) {
    case 'firstName':
      firstName = event.target.value
      fnTarget = event.target
      break
    case 'lastName':
      lastName = event.target.value
      lnTarget = event.target
      break
    case 'email':
      email = event.target.value
      emailTarget = event.target
      break
    case 'password':
      password = event.target.value
      pwdTarget = event.target
      break
    default:
      firstName = lastName = email = password = ''
      break
  }
})

sumbitButton.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(firstName + lastName + email + password)
  if (firstName) {
    emptyFieldMessages[0].classList.add('d-none')
    if (!nameRegx.test(firstName)) {
      fnTarget.classList.add('error')
      errorMessages[0].classList.remove('d-none')
    } else {
      fnTarget.classList.remove('error')
      errorMessages[0].classList.add('d-none')
    }
  } else {
    emptyFieldMessages[0].classList.remove('d-none')
  }
  if (lastName) {
    emptyFieldMessages[1].classList.add('d-none')
    if (!nameRegx.test(lastName)) {
      lnTarget.classList.add('error')
      errorMessages[1].classList.remove('d-none')
    } else {
      lnTarget.classList.remove('error')
      errorMessages[1].classList.add('d-none')
    }
  } else {
    emptyFieldMessages[1].classList.remove('d-none')
  }
  if (email) {
    emptyFieldMessages[2].classList.add('d-none')
    if (!emailRegx.test(email)) {
      emailTarget.classList.add('error')
      errorMessages[2].classList.remove('d-none')
    } else {
      emailTarget.classList.remove('error')
      errorMessages[2].classList.add('d-none')
    }
  } else {
    emptyFieldMessages[2].classList.remove('d-none')
  }
  if (password) {
    emptyFieldMessages[3].classList.add('d-none')
    if (!pwdRegx.test(password)) {
      pwdTarget.classList.add('error')
      errorMessages[3].classList.remove('d-none')
    } else {
      pwdTarget.classList.remove('error')
      errorMessages[3].classList.add('d-none')
    }
  } else {
    emptyFieldMessages[3].classList.remove('d-none')
  }
})

showPassword.addEventListener('click', (event) => {
  event.preventDefault()
  if (pwdTarget.getAttribute('type') === 'text') {
    pwdTarget.setAttribute('type', 'password')
  } else {
    pwdTarget.setAttribute('type', 'text')
  }
})
