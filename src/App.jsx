import { Routes, Route } from "react-router";
import Hero from "./components/Hero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

export default App;
