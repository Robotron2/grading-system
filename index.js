const inputScore = document.getElementById("score")
const scoreBtn = document.getElementById("scoreBtn")
let displayDiv = document.getElementById("displayDiv")

scoreBtn.addEventListener("click", () => {
    if (inputScore.value == "") {
        displayDiv.innerHTML += `<h4>Field cannot be empty</h4>`
    } else if (inputScore.value >= 70 && inputScore.value <= 100) {
        displayDiv.innerHTML += `A`
    } else if (inputScore.value >= 60 && inputScore.value <= 69) {
        displayDiv.innerHTML += `B`
    } else if (inputScore.value >= 50 && inputScore.value <= 59) {
        displayDiv.innerHTML += `C`
    } else if (inputScore.value >= 40 && inputScore.value <= 49) {
        displayDiv.innerHTML += `D`
    } else if (inputScore.value >= 30 && inputScore.value <= 39) {
        displayDiv.innerHTML += `E`
    } else if (inputScore.value >= 0 && inputScore.value <= 29) {
        displayDiv.innerHTML += `F`
    }
})