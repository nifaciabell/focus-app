import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <h3>Authorization</h3>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
