const addTransactionBtn = document.querySelector(".add-transaction");
const addPopup = document.querySelector(".add-transaction-popup");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const transactionCategory = document.querySelector(".transaction-category");
let availableFunds = document.querySelector(".available-funds");
const transactionAmount = document.querySelector(".transaction-amount");
const dark = document.querySelector(".dark");
const bright = document.querySelector(".bright");

// const income = document.querySelector(".income");
let sum = 0;

function addPopupActive() {
  addPopup.classList.add("add-transaction-popup-active");
}

function addPopupInactive() {
  addPopup.classList.remove("add-transaction-popup-active");
}

function saveTransaction() {
  const transactionName = document.querySelector(".transaction-name");
  const expenses = document.querySelector(".expenses");
  const option = transactionCategory.options[transactionCategory.selectedIndex];
  const profits = document.querySelector(".profits");

  if (option.value === "+") {
    const newProfit = document.createElement("div");
    newProfit.classList.add("income");
    // newProfit.setAttribute("id", ID++);

    newProfit.innerHTML = `<i class="fa-solid fa-money-bill-wave"></i>
    <p class="income-name">${transactionName.value}</p>
    <p class="income-amount">${transactionAmount.value + "zł"}</p>
    <p class="delete"><i class="fa-solid fa-xmark"></i></p>`;
    profits.appendChild(newProfit);
    updateAmount();
  } else if (option.value === "-") {
    const newLoss = document.createElement("div");
    newLoss.classList.add("outgoings");
    newLoss.innerHTML = `<i class="fa-solid fa-money-bill-wave"></i>
    <p class="income-name">${transactionName.value}</p>
    <p class="income-amount">-${transactionAmount.value + "zł"}</p>
    <p class="delete"><i class="fa-solid fa-xmark"></i></p>`;
    expenses.appendChild(newLoss);
    updateAmount();
  }

  const deleteQuery = [...document.querySelectorAll(".delete")];
  deleteQuery.forEach((el) => {
    el.addEventListener("click", deleteEl);
  });

  transactionName.value = "";
  transactionAmount.value = "";
  transactionCategory.value = "";

  addPopupInactive();
}

function updateAmount() {
  const option = transactionCategory.options[transactionCategory.selectedIndex];
  if (option.value === "+") {
    sum += parseFloat(transactionAmount.value);
    availableFunds.textContent = `${sum} zł`;
  } else if (option.value === "-") {
    sum -= parseFloat(transactionAmount.value);
    availableFunds.textContent = `${sum} zł`;
  }
}

// function test(id) {
//   const elemenToDelete = document.getElementById(id);
//   income.removeChild(elemenToDelete);
// }

function deleteEl() {
  const parent = this.parentNode;
  const amountElement = parent.querySelector(".income-amount");

  if (parent.classList.contains("income")) {
    parent.remove();
    sum -= parseFloat(amountElement.textContent);
    availableFunds.textContent = `${sum} zł`;
  } else if (parent.classList.contains("outgoings")) {
    parent.remove();
    sum += parseFloat(amountElement.textContent);
    availableFunds.textContent = `${sum} zł`;
  }
}

// function outgoingsIcon() {
//  if ()

//  transactionCategory.options[transactionCategory.selectedIndex].textContent - zawiera -,
//  transactionCategory.options[2]
// }

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector("header");
const allButtons = document.querySelectorAll("button");

function darkTheme() {
  body.classList.add("body-dark");
  wrapper.classList.add("dark-theme");
  header.classList.add("dark-theme");
  allButtons.forEach((el) => {
    el.classList.add("dark-theme");
  });
  dark.classList.add("dark-white");
}

function brightTheme() {
  body.classList.remove("body-dark");
  wrapper.classList.remove("dark-theme");
  header.classList.remove("dark-theme");
  allButtons.forEach((el) => {
    el.classList.remove("dark-theme");
  });
  dark.classList.remove("dark-white");
}

addTransactionBtn.addEventListener("click", addPopupActive);
cancelBtn.addEventListener("click", addPopupInactive);
saveBtn.addEventListener("click", saveTransaction);
dark.addEventListener("click", darkTheme);
bright.addEventListener("click", brightTheme);
