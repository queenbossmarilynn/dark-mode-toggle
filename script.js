// Get the Input Class 
const inputEl = document.querySelector(".input");
console.log(inputEl.checked);

// get body Element 
const bodyEl = document.querySelector("body");

// Turns background black
// inputEl.checked = true;

// Turns background white
// inputEl.checked = false;

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

// Updates Body to either black or white 
function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }
}

// When button is clicked it will update the body to the correct background color. 
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

// When user comes back, or refreshes the page, they get the same setting they left it at.
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}