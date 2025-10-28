let button1 = document.getElementById("myButton"); 
button1.addEventListener("click", function() {

let enteredNumber = prompt("enter number")
let number = Number(enteredNumber)

const isNumberEven = number % 2 === 0;

if (isNumberEven) {
    alert("the number is even");
} else {
    alert("the number is odd");
}
}
);



let button2 = document.getElementById("button_2");
button2.addEventListener("click", function() {

const number1 = Number(prompt("enter number"));
const number2 = Number(prompt("enter number"));
const number3 = Number(prompt("enter number"));

const largest = Math.max(number1, number2, number3);

alert("the largest number is: " + largest);
});



let display = document.getElementById("display");
function updateDisplay() {
    display.textContent = count;
}



let countUp = document.getElementById("up");
countUp.addEventListener("click", function() {

   
count++;
updateDisplay();



});


let countDown = document.getElementById("down");
countDown.addEventListener("click", function() {

count--;
updateDisplay();

});


let reset = document.getElementById("reset");
reset.addEventListener("click", function() {

count = 0;
updateDisplay();

});
