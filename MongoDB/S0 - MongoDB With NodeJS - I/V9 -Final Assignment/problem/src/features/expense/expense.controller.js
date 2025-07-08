import ExpenseModel from "./expense.model.js";
import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    const {title,amount,date,isRecurring,tags}=req.body
    const expenseMod=new ExpenseModel(title,amount,date,isRecurring,tags)
    const result=await this.expenseRepository.addExpense(expenseMod)
    res.status(201).send(result)
  };

  // Get a specific expense
  getOne = async (req, res) => {
    const id=req.params.id
    const result=await this.expenseRepository.getOne(id)
    res.status(200).send(result)
  };

  // Get all expenses
  getAll = async (req, res) => {
    const result=await this.expenseRepository.getAllExpenses()
    res.status(200).send(result)
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    const id=req.params.id
    const tag=req.body.tag
    const result=await this.expenseRepository.addTagToExpense(id,tag)
    res.status(200).send('Tag Added Successfully')
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    const result=await this.expenseRepository.filterExpenses(req.query)
    res.status(200).send(result)
  };
}
