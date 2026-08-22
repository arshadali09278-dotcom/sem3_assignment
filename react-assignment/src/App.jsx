import Q1 from "./question and answers/Q1";
import Q3CounterSplit from "./question and answers/Q3CounterSplit";
import Q4Badge from "./question and answers/Q4Badge";
import Likes from "./question and answers/Likes";
import Card from "./question and answers/Card";

const App = () => {
  return (
    <div>
      <h1>React Practice Assignment</h1>

      <h2>Question 1</h2>
      <Q1 />

      <h2>Question 3</h2>
      <Q3CounterSplit />

      <h2>Question 4</h2>
      <Q4Badge />

      <h2>Question 5</h2>
      <Likes />

      <h2>Student Cards</h2>
      <Card />
    </div>
  );
};

export default App;
