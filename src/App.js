import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import CurrentTimeDisplay from "./components/Expenses/ExpenseTime";
import shadiLogo from "./components/UI/Images/shadiLogo.png";
import NewExpense from "./components/NewExpense/NewExpense";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "New TV",
      amount: 294.67,
      date: new Date(2020, 9, 22),
    },

    {
      id: "e2",
      title: "New Desk (wooden)",
      amount: 494.67,
      date: new Date(2022, 9, 10),
    },

    {
      id: "e3",
      title: "Car insurance",
      amount: 594.67,
      date: new Date(2021, 10, 18),
    },

    {
      id: "e4",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <div>
        <img className="shadi-Logo" src={shadiLogo}></img>
      </div>
      <CurrentTimeDisplay time={props.CurrentTimeDisplay}></CurrentTimeDisplay>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
