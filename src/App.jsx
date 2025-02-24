import { Routes, Route } from "react-router";
import Hero from "./components/Hero";
import AuthForm from "./containers/AuthForm";
import Dashboard from "./containers/Dashboard";
import Flashcards from "./containers/Flashcards";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
