

function createCounter(countEl, incBtn, decBtn, resetBtn, messageEl) {
    let count = 0;

    incBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
    });

 
    if (decBtn) {
    
    decBtn.addEventListener("click", () => {
        count--;
        countEl.textContent = count;
    });
}

    resetBtn.addEventListener("click", () => {
        count = 0;
        countEl.textContent = count;
        messageEl.innerText = "count has been reset, good job.";
        setTimeout(() => {
            messageEl.innerText = "";
        }, 3000);
    });
}






createCounter(
    document.getElementById("count"),
    document.getElementById("increase"),
    document.getElementById("decrease"),
    document.getElementById("reset"),
    document.getElementById("message"),


);





const numberInput = document.getElementById("number"); 
const submit = document.getElementById("submit");



submit.addEventListener("click", () => {
    const value = Number(numberInput.value);

    if (value >= 10) {
        alert("good job");
    } else {
        alert("try again");
    }
});