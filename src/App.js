import "./App.css";

import { useContext } from "react";
import { GeneralContext } from "./Context/GeneralContext";

function App() {
  const { allReviews } = useContext(GeneralContext);
  console.log(allReviews);
  return <div className="App"></div>;
}

export default App;
