//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
  class ExpenseTracker {
    //Create your private properites here
    #expenses;
    #income;
    constructor(income) {
      this.#income = income;
      this.#expenses = [];
    }
    #calculateTotalExpenses() {
      return this.#expenses.reduce((agg, num) => agg + num["amount"], 0);
    }
    addExpense(name, amount, date) {
      this.#expenses.push({ name, amount, date });
    }
    calculateBalance() {
      return this.#income - this.#calculateTotalExpenses();
    }
    //Create a constructor function
    //create your private properties to calculate expenses
    //Create your public properties here
  }
  //The class should function accordingly.
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}
