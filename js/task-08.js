const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        alert("All fields must be filled!")
    } else {
        const formData = {
            email,
            password
        };

        form.reset();
        console.log(formData);
    }
}
