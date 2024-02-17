const addTransactionBtn = document.querySelector(".add-transaction");
const addPopup = document.querySelector(".add-transaction-popup");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const transactionCategory = document.querySelector(".transaction-category");

function addPopupActive() {
  addPopup.classList.add("add-transaction-popup-active");
}

function addPopupInactive() {
  addPopup.classList.remove("add-transaction-popup-active");
}

function saveTransaction() {
  const transactionAmount = document.querySelector(".transaction-amount");
  const transactionName = document.querySelector(".transaction-name");
  const profits = document.querySelector(".profits");

  const option = transactionCategory.options[transactionCategory.selectedIndex];
  // console.log(option);
  if (option.value === "+") {
    const newProfit = document.createElement("div");
    newProfit.classList.add("income");
    newProfit.innerHTML = `<i class="fa-solid fa-money-bill-wave"></i>
    <p class="income-name">${transactionName.value}</p>
    <p class="income-amount">${transactionAmount.value + "zł"}</p>
    <p class="delete"><i class="fa-solid fa-xmark"></i></p>`;

    profits.appendChild(newProfit);
    // console.log("tak");
    // console.log(option.textContent);
  } else if (option.value === "-") {
    console.log("no moj drogi jestes na minusie");
  }
  console.log(transactionAmount.value);
  console.log(transactionName.value);

  addPopupInactive();
}

addTransactionBtn.addEventListener("click", addPopupActive);
cancelBtn.addEventListener("click", addPopupInactive);
saveBtn.addEventListener("click", saveTransaction);
