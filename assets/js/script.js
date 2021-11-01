// variable declerations
var feature_btn =  document.querySelector('.features a');
var modalBox = document.querySelector('.modal-container');
var scrollAt;
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var username_err = document.querySelector(".username-err");
var password_err = document.querySelector(".password-err");


// Event Listners for Show Features btn
feature_btn.addEventListener("click", function(){
    var feature_nodes = document.querySelectorAll('.feature-list li');
    var feature_node = document.querySelector('.feature-list');
    if(feature_btn.innerHTML == "See All Features")
    {
        feature_btn.innerHTML = "Show Less Features";
        feature_nodes.forEach( function(val) {
            feature_node.appendChild(val.cloneNode(true));
        });
        scrollAt = window.scrollY;
    } else {
        window.scroll({
          top: scrollAt,
          left: 0,
          behavior: 'smooth'
        });
        feature_btn.innerHTML = "See All Features";
        feature_nodes.forEach( function(val, index) {
            if(index>5)
                val.remove();
        });
    }
});

document.querySelector('.sub-list-container').addEventListener("click", function(e){
    document.querySelector('.sub-list').classList.remove("hide-me");
    e.stopImmediatePropagation();
});

document.addEventListener("click", function(){
    document.querySelector('.sub-list').classList.add("hide-me");
});

//  Event Listners for menu btn
document.querySelector('nav').addEventListener("click", function(){
    document.querySelector('.nav-list').classList.toggle("hide-togal");
    this.classList.toggle("cross-icon");
    document.querySelector('.language').classList.toggle("hide-togal");
    document.querySelector('.sign-in').classList.toggle("hide-togal");
});

//  Event to stop propagation of menu btn
document.querySelector('.nav-list').addEventListener("click", function(e){ e.stopImmediatePropagation() });


//  Event Listners for Sign in btn
document.querySelector('.sign-in').addEventListener("click", function(){
    modalBox.classList.remove("hide-me");
});

//  Event Listners to close modal box
modalBox.addEventListener("click", function(){
    modalBox.classList.add("hide-me");
    document.querySelector('form').reset();
    document.querySelector('.modal').classList.remove("hide-me");
    document.querySelector('.sing-in-modal').classList.add("hide-me");
    document.querySelectorAll('.error').forEach(function(val){val.classList.add("hide-me")});
});

// Event to stop propagation of modal box
document.querySelector('.modal').addEventListener("click", function(e){e.stopImmediatePropagation()});
document.querySelector('.sing-in-modal').addEventListener("click", function(e){e.stopImmediatePropagation()});

// Event Listners on submit
document.querySelector('#submit').addEventListener("click", function(e){
    if(validate()){document.querySelector('.modal').classList.add("hide-me");
    document.querySelector('.sing-in-modal').classList.remove("hide-me");}
});


//function to validate input
function validate(){
    var flag = true;
    usernameValidate() || (flag = false);
    passwordValidate() || (flag = false);
    return flag;
}

//username input validation function
function usernameValidate(){
    if(usernameValidateOnKeyPress()){
        if(username.value.trim().length <3){
            username_err.innerHTML = "The username must include 3 characters";
            username_err.classList.remove("hide-me");
            return false;
        }
        else
            return true
    }
    else
        return false;
}

//password input validation function
function passwordValidate(){
    if(passwordValidateOnKeyPress()){
        if(password.value.trim().length <6){
            password_err.innerHTML = "The password must include 6 characters";
            password_err.classList.remove("hide-me");
            return false;
        }
        else{
            if (password.value.search(/[A-Z]/) == -1) {
                password_err.innerHTML = "Password must include a capital letter character";
                password_err.classList.remove("hide-me");
            } else if (password.value.search(/[a-z]/) == -1) {
                password_err.innerHTML = "Password must include a small letter character";
                password_err.classList.remove("hide-me");
            } else if (password.value.search(/[\d]/) == -1) {
                password_err.innerHTML = "Password must include a numeric character";
                password_err.classList.remove("hide-me");
            } else if (password.value.search(/[@#$%&]/) == -1) {
                password_err.innerHTML = "Password must include '@', '#', '$', '%' or '&'";
                password_err.classList.remove("hide-me");
                return false;
            } else return true;
        }
    }
    else
        return false;
}

// username onclick validation
function usernameValidateOnKeyPress(){
    if (username.value.trim() != "") {
        username_err.classList.add("hide-me");
        if (/^[A-Za-z@#$_.-\d]+$/.test(username.value)) {
            username_err.classList.add("hide-me");
            if (username.value.trim().length <= 15) {
                username_err.classList.add("hide-me");
                return true;
            } else {
                username_err.innerHTML = "The username can be 15 character max";
                username_err.classList.remove("hide-me");
                return false;
            }
        } else {
            if(/^[A-Za-z@#$_.-\d]+$/.test(username.value.charAt(username.value.length-1))){
                username_err.innerHTML = "invalid charecter input";
                username_err.classList.remove("hide-me");
                return false;
            } else {
                username_err.innerHTML = "invalid charecter input ' "+ username.value.charAt(username.value.length-1) +" '";
                username_err.classList.remove("hide-me");
                return false;
            }
        }
    } else {
        if (username.value == "") {
            username_err.innerHTML = "The username field is required";
            username_err.classList.remove("hide-me");
            return false;
        } else {
            username_err.innerHTML = "The username can't be blank space";
            username_err.classList.remove("hide-me");
            return false;
        }
    }
}

// password onclick validation
function passwordValidateOnKeyPress(){
    if (password.value.trim() != "") {
        password_err.classList.add("hide-me");
        if (/^[A-Za-z0-9@#$%&]+$/.test(password.value)) {
            password_err.classList.add("hide-me");
            if (password.value.trim().length <= 15) {
                password_err.classList.add("hide-me");
                return true;
            } else {
                password_err.innerHTML = "Password can include 15 character max";
                password_err.classList.remove("hide-me");
                return false;
            }
        } else {
            if(/^[A-Za-z0-9@#$%&]+$/.test(password.value.charAt(password.value.length-1))){
                password_err.innerHTML = "invalid charecter input";
                password_err.classList.remove("hide-me");
                return false;
            } else {
                password_err.innerHTML = "invalid charecter input ' "+ password.value.charAt(password.value.length-1) +" '";
                password_err.classList.remove("hide-me");
                return false;
            }
        }
    } else {
        if (password.value == "") {
            password_err.innerHTML = "The password field is required";
            password_err.classList.remove("hide-me");
            return false;
        } else {
            password_err.innerHTML = "Password can't be blank space";
            password_err.classList.remove("hide-me");
            return false;
        }
    }
}

//Event listner on username
username.addEventListener("keyup",usernameValidateOnKeyPress);
username.addEventListener("blur",usernameValidate);

//Event listner on password
password.addEventListener("keyup",passwordValidateOnKeyPress);
password.addEventListener("blur",passwordValidate);

// Event Listner on show password
document.querySelector("#show-password").addEventListener("click", function(){
    if(this.checked)
        password.setAttribute("type","text");
    else
        password.setAttribute("type","password");
    
});