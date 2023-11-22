const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const checkButton = document.querySelector("#check-btn");

const noOfNotesAvailable = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturn);
    } else {
      showMessage(
        "Do you wanna wash dishes? 🍽️"
      );
    }
  } else {
    showMessage("Invalid Bill Amount 😏");
  }
});

function calculateChange(amountToBeReturned){
for(let i = 0; i < availableNotes.length; i++){
  /* No. of Notes need for the denomination */
  const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
  /* Then we need to update the amount to be return remaining one value after*/
  amountToBeReturned = amountToBeReturned % availableNotes[i];
  /* update the no. of Notes in the table for the current ammount */
  noOfNotesAvailable[i].innerText = numberOfNotes;
}
}

function hideMessage() {
errorMessage.style.display = "none";
}

function showMessage(message) {
errorMessage.style.display = "block";
 errorMessage.innerText = message;
}

