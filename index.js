const inputScore = document.getElementById("score")
const scoreBtn = document.getElementById("scoreBtn")
let displayDiv = document.getElementById("displayDiv")

scoreBtn.addEventListener("click", () => {
    if (inputScore.value == "") {
        displayDiv.innerHTML = `<h4 class = "text-danger">Field Cannot be empty</h4>`
        inputScore.value = ""
    } else if (inputScore.value > 100) {
        displayDiv.innerHTML = `<h4 class = "text-dark">Enter scores between 0 and 100</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 70 && inputScore.value <= 100) {
        displayDiv.innerHTML = `<h4 class = "text-success">Grade is A. Keep it Up!</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 60 && inputScore.value <= 69) {
        displayDiv.innerHTML = `<h4>Grade is B. Almost there!!</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 50 && inputScore.value <= 59) {
        displayDiv.innerHTML = `<h4>Grade is C. Put more effort!</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 40 && inputScore.value <= 49) {
        displayDiv.innerHTML = `<h4>Grade is D. Work more get C!!</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 30 && inputScore.value <= 39) {
        displayDiv.innerHTML = `<h4>Grade is E. Improve!!</h4>`
        inputScore.value = ""
    } else if (inputScore.value >= 0 && inputScore.value <= 29) {
        displayDiv.innerHTML = `<h4 class = "text-danger">Grade is F. Try harder next time!!</h4>`
        inputScore.value = ""
    } else {
        displayDiv.innerHTML = `<h4 class = "text-danger">Enter real numbers only</h4>`
        inputScore.value = ""
    }
})