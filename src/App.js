import React, { useState } from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";


const Dummy_Expenses = [
  {
    id:'e1',
    title: "Petrol",
    amount: "$267",
    date: new Date(2021, 11, 5),
  },
  {
    id:'e2',
    title: "Bills",
    amount: "$384",
    date: new Date(2021, 11, 5),
  },
  {
    id:'e3',
    title: "Rent",
    amount: "$1000",
    date: new Date(2021, 11, 5),
  },
  {
    id:'e4',
    title: "Car Insurance",
    amount: "$200",
    date: new Date(2021, 11, 5),
  },
  {
    id:'e5',
    title: "Medicines",
    amount: "$54",
    date: new Date(2021, 11, 5),
  },
  {
    id:'e6',
    title: "Shopping",
    amount: "$85",
    date: new Date(2021, 11, 5),
  },
];

const App = () => {
  const [expense, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
