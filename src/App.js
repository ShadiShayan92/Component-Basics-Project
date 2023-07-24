import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      title: "New TV",
      amount: 294.67,
      date: new Date(2023, 7, 18),
    },

    {
      title: "Car insurance",
      amount: 394.67,
      date: new Date(2023, 8, 18),
    },

    {
      title: "New Desk (wooden)",
      amount: 494.67,
      date: new Date(2023, 9, 18),
    },

    {
      title: "Car insurance",
      amount: 594.67,
      date: new Date(2023, 10, 18),
    },
  ];

  return (
    <div>
      <h2>Let's get start.. </h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
