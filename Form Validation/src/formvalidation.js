console.log("js file");
document.getElementById("formvalidation")
      .addEventListener("submit", function validationForm(event) {

  event.preventDefault();

  let UserName = document.getElementById("uname").value.trim();
  let Email = document.getElementById("email").value.trim()
  let Pass = document.getElementById("password").value.trim()
  let Cpass = document.getElementById("cpassword").value.trim()

  let uNameError = document.getElementById("error-name")
  let emailError = document.getElementById("error-email")
  let passError = document.getElementById("error-pass")
  let cPassError = document.getElementById("error-cpass")

  let unamePattern = /^[a-zA-Z0-9]{3,}$/;
  let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

// Username validation  

  if (UserName === "") {
    uNameError.innerHTML = "*enter user name";

  }
  else if (!unamePattern.test(UserName)) {
    uNameError.textContent = "*invalid username(eg:user123)";

  }

  else {
    uNameError.textContent = "";
  }

//email validation

  if (Email === "") {
    emailError.innerHTML = "*enter your email";
  }
  else if (!emailPattern.test(Email)) {
      emailError.textContent = "*invalid email";
    }
    else {
    emailError.textContent = "";
  }

//password validation

  if(Pass===""){
    passError.innerHTML="*enter your password";
  }
  else if(Pass.length<=3 || Pass.length>13){
    passError.innerHTML="*enter password between 3-12";
  }
  else{
    passError.innerHTML="";
  }

//confrim password validation

if(Cpass===""){
    cPassError.innerHTML="*re-enter your password";
  }
  else if(Cpass!==Pass){
    cPassError.innerText="*password mismatch";
  }
  else{
    cPassError.innerText="";
  }
});

