const express = require('express');
const {
  addExpense, getAllExpense, deleteExpense, downloadExpenseExcel
} = require("../controllers/expenseController"); // ⬅️ make sure you create this file

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/downloadExcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

module.exports = router;
