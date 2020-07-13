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

      // expenses.updateView();
    }
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
    updateView: function () {
      // Update budget view
    },
  },
  income: {},
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
  }
});

app.percentageBoxes.addEventListener("transitionend", () => {
  actions.closePercentagesPage();
  actions.showCompletedPage();
});

app.proceedButton.addEventListener("click", () => {
  actions.hideCompletedPage();
});

app.completedPage.addEventListener("transitionend", () => {
  actions.closeCompletedPage();
  actions.showBudgetPage();
});
