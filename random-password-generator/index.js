const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
})

copyIconEl.addEventListener("click", () => {
    if (inputEl.value) {
        copyPassword();
        alertEl.classList.remove("active")
        setTimeout(() => {
            alertEl.classList.add("active")
        }, 2000)
    }

})

function createPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=[]{};:,.<>?"
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)
    alertEl.innerText = inputEl.value + " copied!";
}