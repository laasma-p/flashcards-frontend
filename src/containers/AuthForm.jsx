import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";

const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  useEffect(() => {
    if (location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  const toggleFormHandler = () => {
    navigate(isLogin ? "/register" : "/login");
  };

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white-smoke">
      <div className="bg-whisper p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-japanese-laurel text-center">
          {isLogin ? "Login to your account" : "Create an account"}
        </h2>
        <form className="mt-6">
          {!isLogin && (
            <>
              <div className="mb-4 text-night-rider">
                <label htmlFor="username" className="block font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={inputChangeHandler}
                  className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
                />
              </div>
              <div className="mb-4 text-night-rider">
                <label htmlFor="firstName" className="block font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={inputChangeHandler}
                  className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
                />
              </div>
            </>
          )}
          <div className="mb-4 text-night-rider">
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
              className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
            />
          </div>
          <div className="mb-4 text-night-rider">
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
              className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-japanese-laurel text-white-smoke hover:text-night-rider font-semibold rounded hover:bg-gossip transition-all cursor-pointer"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center text-night-rider">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleFormHandler}
            className="text-japanese-laurel font-semibold hover:underline cursor-pointer"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
