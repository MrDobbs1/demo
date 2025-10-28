



document.getElementById("checkBtn").addEventListener("click", function() {
const userInput = document.getElementById("numberInput").value;
const result = document.getElementById("result");

if (userInput === ""|| isNaN(userInput)) {
    result.textContent = "Please eneter a number.";
    result.style.color = "orange";
} else {
    const num = Number(userInput);
    if (num % 2 === 0) {
        result.textContent = "it's even";
        result.style.color = "green";
    } else {
        result.textContent = "it's odd";
        result.style.color = "red";
    }
}

});