import { Routes, Route } from "react-router";
import Hero from "./components/Hero";
import AuthForm from "./containers/AuthForm";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
