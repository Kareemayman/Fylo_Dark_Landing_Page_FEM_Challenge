const SignInButton = document.querySelector('.sign-in button')
let signInInput = document.querySelector('.sign-in input')
let validation = document.querySelector('.validation')

SignInButton.addEventListener('click', e => {

    validation.innerHTML = ""

    let email = signInInput.value


    if(email == "" || !email.includes('@')) {

        let newParag = document.createElement('p')

        newParag.textContent = "Please enter a valid email address"

        validation.append(newParag)

    } else {

        signInInput.value = ""

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });          
    }

})

