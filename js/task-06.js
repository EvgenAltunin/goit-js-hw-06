const textInput = document.querySelector("#validation-input")

textInput.addEventListener("blur", onTextInputBlur);

function onTextInputBlur(event) {
    if (event.currentTarget.value.trim().length !== Number(textInput.dataset.length)) {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    } else {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }
}