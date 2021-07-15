import HelloWorld from "./HelloWorld";
import Heading from "./Heading";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Heading title="Pui" />
      <Counter />
    </div>
  );
}
