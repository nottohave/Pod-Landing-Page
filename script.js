const email = document.getElementById("email");
const form = document.querySelector("#form");
const emailLabel = document.querySelector(".email-label");

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation() {
    if (email.value.match(pattern)) {
        emailLabel.classList.remove("display");
    } else {
        emailLabel.classList.add("display");
    }    
}
