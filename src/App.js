import Expenses from './components/Expenses';
function App() {
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
  return (
    <div>
      <h2>My Practice </h2>
     
    <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
