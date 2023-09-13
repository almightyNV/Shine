import { useState } from "react";
import Interface from "./components/Interface";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Interface />
    </>
  );
}

export default App;
