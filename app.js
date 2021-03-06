// Components and selections
const app = {
  landingPage: document.querySelector(".app__landingPage"),
  incomePage: document.querySelector(".app__income"),
  incomeForm: document.querySelector(".app__incomeForm"),
  incomeInput: document.querySelector(".app__incomeForm--input"),
  percentagesPage: document.querySelector(".app__percentages"),
  percentageBoxes: document.querySelector(".app__percentages--boxes"),
  completedPage: document.querySelector(".app__completed"),
  proceedButton: document.querySelector(".app__completed--btn"),
  budgetPage: document.querySelector(".app__budget"),
  expenses: document.querySelectorAll(".exp"),
  incomes: document.querySelectorAll(".inc"),
};

// Functions
const actions = {
  hideLandingPage: function () {
    app.landingPage.classList.add("hide");
  },
  closeLandingPage: function () {
    app.landingPage.classList.add("remove");
  },
  showIncomePage: function () {
    app.incomePage.classList.remove("remove");
  },
  storeIncome: function () {
    const income = Number(app.incomeInput.value);
    data.income = income;
    app.incomeInput.value = "";
  },
  hideIncomePage: function () {
    app.incomePage.classList.add("hide");
  },
  closeIncomePage: function () {
    app.incomePage.classList.add("remove");
  },
  showPercentagesPage: function () {
    app.percentagesPage.classList.remove("remove");
  },
  storePercentage: function (e) {
    const percentageText = e.target.textContent;
    const percentage = Number(percentageText.replace("%", ""));
    data.percentage = percentage;
  },
  hidePercentagesPage: function () {
    app.percentagesPage.classList.add("hide");
  },
  closePercentagesPage: function () {
    app.percentagesPage.classList.add("remove");
  },
  showCompletedPage: function () {
    app.completedPage.classList.remove("remove");
  },
  hideCompletedPage: function () {
    app.completedPage.classList.add("hide");
  },
  closeCompletedPage: function () {
    app.completedPage.classList.add("remove");
  },

  calculateBudget: function () {
    if (data.percentage === 10) {
      ////////// EXPENSES //////////
      // Rent = 30% of income
      data.expenses.items.push({ rent: data.income * (30 / 100) });

      // Medical = 10% of income
      data.expenses.items.push({ medical: data.income * (10 / 100) });

      // Insurance = 5% of income
      data.expenses.items.push({ insurance: data.income * (5 / 100) });

      // Grocery = 20% of income
      data.expenses.items.push({ grocery: data.income * (20 / 100) });

      // Clothing = 10% of income
      data.expenses.items.push({ clothing: data.income * (10 / 100) });

      // Transport = 10% of income
      data.expenses.items.push({ transport: data.income * (10 / 100) });

      // Entertainment = 5% of income
      data.expenses.items.push({ entertainment: data.income * (5 / 100) });

      ////////// INCOME //////////
      // Emergency savings = 4% of income
      data.incomes.items.push({ savings: data.income * (4 / 100) });

      // Retirement = 3% of income
      data.incomes.items.push({ retirement: data.income * (3 / 100) });

      // Investments = 3% of income
      data.incomes.items.push({ investments: data.income * (3 / 100) });
    } else if (data.percentage === 20) {
      ////////// EXPENSES //////////
      // Rent = 30% of income
      data.expenses.items.push({ rent: data.income * (30 / 100) });

      // Medical = 10% of income
      data.expenses.items.push({ medical: data.income * (10 / 100) });

      // Insurance = 5% of income
      data.expenses.items.push({ insurance: data.income * (5 / 100) });

      // Grocery = 15% of income
      data.expenses.items.push({ grocery: data.income * (15 / 100) });

      // Clothing = 5% of income
      data.expenses.items.push({ clothing: data.income * (5 / 100) });

      // Transport = 10% of income
      data.expenses.items.push({ transport: data.income * (10 / 100) });

      // Entertainment = 5% of income
      data.expenses.items.push({ entertainment: data.income * (5 / 100) });

      ////////// INCOME //////////
      // Emergency savings = 10% of income
      data.incomes.items.push({ savings: data.income * (10 / 100) });

      // Retirement = 5% of income
      data.incomes.items.push({ retirement: data.income * (5 / 100) });

      // Investments = 5% of income
      data.incomes.items.push({ investments: data.income * (5 / 100) });
    } else if (data.percentage === 35) {
      ////////// EXPENSES //////////
      // Rent = 20% of income
      data.expenses.items.push({ rent: data.income * (20 / 100) });

      // Medical = 10% of income
      data.expenses.items.push({ medical: data.income * (10 / 100) });

      // Insurance = 5% of income
      data.expenses.items.push({ insurance: data.income * (5 / 100) });

      // Grocery = 10% of income
      data.expenses.items.push({ grocery: data.income * (10 / 100) });

      // Clothing = 5% of income
      data.expenses.items.push({ clothing: data.income * (5 / 100) });

      // Transport = 10% of income
      data.expenses.items.push({ transport: data.income * (10 / 100) });

      // Entertainment = 5% of income
      data.expenses.items.push({ entertainment: data.income * (5 / 100) });

      ////////// INCOME //////////
      // Emergency savings = 15% of income
      data.incomes.items.push({ savings: data.income * (15 / 100) });

      // Retirement = 10% of income
      data.incomes.items.push({ retirement: data.income * (10 / 100) });

      // Investments = 10% of income
      data.incomes.items.push({ investments: data.income * (10 / 100) });
    } else if (data.percentage === 50) {
      ////////// EXPENSES //////////
      // Rent = 25% of income
      data.expenses.items.push({ rent: data.income * (25 / 100) });

      // Medical = 5% of income
      data.expenses.items.push({ medical: data.income * (5 / 100) });

      // Insurance = 5% of income
      data.expenses.items.push({ insurance: data.income * (5 / 100) });

      // Grocery = 7.5% of income
      data.expenses.items.push({ grocery: data.income * (7.5 / 100) });

      // Clothing = 2.5% of income
      data.expenses.items.push({ clothing: data.income * (2.5 / 100) });

      // Transport = 7.5% of income
      data.expenses.items.push({ transport: data.income * (7.5 / 100) });

      // Entertainment = 2.5% of income
      data.expenses.items.push({ entertainment: data.income * (2.5 / 100) });

      ////////// INCOME //////////
      // Emergency savings = 20% of income
      data.incomes.items.push({ savings: data.income * (20 / 100) });

      // Retirement = 10% of income
      data.incomes.items.push({ retirement: data.income * (10 / 100) });

      // Investments = 20% of income
      data.incomes.items.push({ investments: data.income * (20 / 100) });
    }

    data.updateView(app.expenses, data.expenses);
    data.updateView(app.incomes, data.incomes);
  },

  showBudgetPage: function () {
    app.budgetPage.classList.remove("remove");
  },
};

const data = {
  income: null,
  percentage: null,
  expenses: {
    items: [],
  },
  incomes: {
    items: [],
  },
  updateView: function (transactions, transactionType) {
    // Update budget view
    let index = 0;
    transactions.forEach((transaction) => {
      let amount = Object.entries(transactionType.items[index])[0][1];
      index++;
      transaction.textContent = `R ${amount}`;
    });
  },
};

// Event listeners
app.landingPage.addEventListener("animationend", () => {
  actions.hideLandingPage();
});

app.landingPage.addEventListener("transitionend", () => {
  actions.closeLandingPage();
  actions.showIncomePage();
});

app.incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  actions.storeIncome();
  actions.hideIncomePage();
});

app.incomePage.addEventListener("transitionend", () => {
  actions.closeIncomePage();
  actions.showPercentagesPage();
});

app.percentageBoxes.addEventListener("click", (e) => {
  if (e.target.classList.contains("app__percentages--boxes")) {
    null;
  } else {
    actions.storePercentage(e);
    actions.hidePercentagesPage();
    actions.calculateBudget();

    actions.closePercentagesPage();
    actions.showCompletedPage();
  }
});

// app.percentagesPage.addEventListener("transitionend", () => {});

app.proceedButton.addEventListener("click", () => {
  actions.hideCompletedPage();
});

app.completedPage.addEventListener("transitionend", () => {
  actions.closeCompletedPage();
  actions.showBudgetPage();
});
