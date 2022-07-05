// SHOW PASSWORD
const passwordInputs = document.querySelectorAll(".passwordToggler");
      passwordInputs.forEach(passwordInput => {
        passwordInput.addEventListener("click", () => {
            const inputSibling = passwordInput.previousElementSibling;
            if(inputSibling.type == "password"){
              inputSibling.type = "text";
              passwordInput.innerHTML = `<span class="fa-solid fa-eye"></span>`
            } 
            else if(inputSibling.type == "text"){
              inputSibling.type = "password";
              passwordInput.innerHTML = `<span class="fa-solid fa-eye-slash"></span>`
            }
        })
    });


