const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturn);
    } else {
      showMessage(
        "The cash you provided should be at least equal to bill amount"
      );
    }
  } else {
    showMessage("The bill amount should be greater than 0");
  }
});

function hideMessage() {
errorMessage.style.display = "none";
}

function showMessage(message) {
errorMessage.style.display = "block";
 errorMessage.innerText = message;
}

