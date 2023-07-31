import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import CurrentTimeDisplay from "./components/Expenses/ExpenseTime";
import shadiLogo from "./components/UI/Images/shadiLogo.png";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "New TV",
      amount: 294.67,
      date: new Date(2023, 7, 18),
    },

    {
      id: "e2",
      title: "Car insurance",
      amount: 394.67,
      date: new Date(2023, 8, 18),
    },

    {
      id: "e3",
      title: "New Desk (wooden)",
      amount: 494.67,
      date: new Date(2023, 9, 18),
    },

    {
      id: "e4",
      title: "Car insurance",
      amount: 594.67,
      date: new Date(2023, 10, 18),
    },
  ];

  return (
    <div>
      <div>
        <img className="shadi-Logo" src={shadiLogo}></img>
      </div>
      <CurrentTimeDisplay time={props.CurrentTimeDisplay}></CurrentTimeDisplay>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
