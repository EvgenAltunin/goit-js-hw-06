const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", changeGreeting);

function changeGreeting(event) {
    if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
    }
}

