import { Routes, Route } from "react-router";
import Hero from "./components/Hero";
import AuthForm from "./containers/AuthForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/login" element={<AuthForm />} />
    </Routes>
  );
}

export default App;
