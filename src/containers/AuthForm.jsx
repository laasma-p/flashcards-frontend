const AuthForm = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white-smoke">
      <div className="bg-whisper p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-japanese-laurel text-center">
          Login to your account
        </h2>
        <form className="mt-6">
          <div className="mb-4 text-night-rider">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
            />
          </div>
          <div className="mb-4 text-night-rider">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border border-goldenrod rounded focus:ring-2 focus:ring-gossip focus:outline-none"
            />
          </div>
          <button className="w-full px-4 py-2 bg-japanese-laurel text-white-smoke hover:text-night-rider font-semibold rounded hover:bg-gossip transition-all cursor-pointer">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-night-rider">
          Don't have an account?{" "}
          <button className="text-japanese-laurel font-semibold hover:underline cursor-pointer">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
