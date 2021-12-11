const email = document.getElementById("email");
const form = document.querySelector("#form");
const emailLabel = document.querySelector(".email-label");

// create event for form to catch any submition event from the btn
form.addEventListener("submit", (e) => {
    // check for all error message
    let messages = [];

    // if name is an empty string or empty
    if (email.value === "" || email.value == null) {
        emailLabel.toggleAttribute(".display");
    } else {
        console.log("submit success");
    }
    e.preventDefault()
})

