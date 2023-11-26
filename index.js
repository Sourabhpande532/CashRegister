const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const checkButton = document.querySelector("#check-btn");
const buttonNext = document.querySelector("#btn-next");
const noOfNotesAvailable = document.querySelectorAll(".no-of-notes");
const cashGivenAmount = document.querySelector(".cash-given-amount");
const returnChangeTable = document.querySelector(".change-table");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function nextBtnHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  if (Number(billAmount.value) > 0) {
    cashGivenAmount.style.display = "block";
    buttonNext.style.display = "none";
    errorMessage.style.display = "none";
  } else {
    showMessage("Please enter valid values");
  }
}

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (cashGiven.value === billAmount.value) {
      showMessage("don't need to return change");
      returnChangeTable.style.display = "none"
    }
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturn =
        Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturn);
    } else {
      showMessage("Do you wanna wash dishes? 🍽️");
    }
  } else {
    showMessage("Invalid Bill Amount 😏");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    /* No. of Notes need for the denomination */
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    /* Then we need to update the amount to be return remaining value after denomination*/
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

buttonNext.addEventListener("click", nextBtnHandler);
