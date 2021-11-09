import React from 'react';
import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';



const App = () => {

  const expense = [
    {
      title: "Petrol",
      amount: "$267",
      date: new Date(2021, 11, 5),
    },
    {
      title: "Bills",
      amount: "$384",
      date: new Date(2021, 11, 5),
    },
    {
      title: "Rent",
      amount: "$1000",
      date: new Date(2021, 11, 5),
    },
    {
      title: "Car Insurance",
      amount: "$200",
      date: new Date(2021, 11, 5),
    },
    {
      title: "Medicines",
      amount: "$54",
      date: new Date(2021, 11, 5),
    },
    {
      title: "Shopping",
      amount: "$85",
      date: new Date(2021, 11, 5),
    },
  ];

  const addExpenseHandler = expense =>  {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expense} />
    </div>
  );
};

export default App;
