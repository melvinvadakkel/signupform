let firstname = document.getElementById('firstname')
let secondname = document.getElementById('secondname')
let email = document.getElementById('email')
let newpassword = document.getElementById('newpassword')
let confirmpassword = document.getElementById('confirmpassword')

let firstname_err = document.getElementById('firstname_err')
let secondname_err = document.getElementById('secondname_err')
let email_err = document.getElementById('email_err')
let newpassword_err = document.getElementById('newpassword_err')
let confirmpassword_err = document.getElementById('confirmpassword_err')



let fnameRegex = /^[A-Z][a-z]*$/
let snameRegex = /^[A-Z][a-z]*$/
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
let newpasswordRegex = /^(?=.*[A-Z])[a-zA-Z]{6,}$/
let confirmpasswordRegex = /^(?=.*[A-Z])[a-z]{5,}[A-Z]$|^(?=.*[A-Z])[A-Z][a-z]{5,}$|^(?=.*[A-Z])[a-z]*[A-Z][a-z]+$/

function signup() {

    let resultOfFirstname = fnameRegex.test(firstname.value)
    let resultOfSecondname = snameRegex.test(secondname.value)
    let resultOfemail = emailRegex.test(email.value)
    let resultOfnewpassword = newpasswordRegex.test(newpassword.value)
    let resultOfconfirmpassword = confirmpasswordRegex.test(confirmpassword.value)

    if (resultOfFirstname) {
        firstname_err.style.visibility = 'hidden'
    } else {
        firstname_err.style.visibility = 'visible'
    }

    if (resultOfSecondname) {
        secondname_err.style.visibility = 'hidden'
    } else {
        secondname_err.style.visibility = 'visible'
    }
    if (resultOfemail) {
        email_err.style.visibility = 'hidden'
    } else {
        email_err.style.visibility = 'visible'
    }
    if (resultOfnewpassword) {
        newpassword_err.style.visibility = 'hidden'
    } else {
        newpassword_err.style.visibility = 'visible'
    }
    if (resultOfconfirmpassword) {
        confirmpassword_err.style.visibility = 'hidden'
    } else {
        confirmpassword_err.style.visibility = 'visible'
    }

}