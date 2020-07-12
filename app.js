// Components and selections
const app = {
  landingPage: document.querySelector(".app__landingPage"),
  incomePage: document.querySelector(".app__income"),
  incomeForm: document.querySelector(".app__incomeForm"),
  incomeInput: document.querySelector(".app__incomeForm--input"),
  percentagesPage: document.querySelector(".app__percentages"),
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
};

const data = {
  income: null,
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
});
