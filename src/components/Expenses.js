import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpense = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

// let expenseContent = <p>No Expense Found.</p>;
// if(filteredExpense.length > 0){
//   expenseContent=filteredExpense.map((expense) => (
//     <ExpenseItems
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ));
// }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        />
         {/* {filteredExpense.length ===0  && <p>No Expense Found.</p>}
        {filteredExpense.length > 0 && (
       
          filteredExpense.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) )} */}
        <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
