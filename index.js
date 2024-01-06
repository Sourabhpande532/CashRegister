const billAmountInput = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");
const errorMessageEl = document.querySelector("#error-message");
const checkButton = document.querySelector("#check-btn");
const buttonNext = document.querySelector("#btn-next");
const noOfNotesAvailableEl = document.querySelectorAll(".no-of-notes");
const cashGivenAmountEl = document.querySelector(".cash-given-amount");
const returnChangeTable = document.querySelector(".change-table");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function nextBtnHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  if (Number(billAmountInput.value) > 0) {
    cashGivenAmountEl.style.display = "block";
    buttonNext.style.display = "none";
    errorMessageEl.style.display = "none";
  } else {
    showMessage("Please enter valid values");
  }
}

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  if (Number(billAmountInput.value) > 0) {
    if (cashGivenInput.value === billAmountInput.value) {
      showMessage("don't need to return change");
      returnChangeTable.style.display = "none"
    }
    if (Number(cashGivenInput.value) >= Number(billAmountInput.value)) {
      const amountToBeReturn =
        Number(cashGivenInput.value) - Number(billAmountInput.value);
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
    noOfNotesAvailableEl[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessageEl.style.display = "none";
}

function showMessage(message) {
  errorMessageEl.style.display = "block";
  errorMessageEl.innerText = message;
}

buttonNext.addEventListener("click", nextBtnHandler);
