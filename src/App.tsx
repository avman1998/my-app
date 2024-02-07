import { useState } from "react";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Header title="Hey This is typescript class" desc="React + Typescript" />
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
