
import { useState } from "react";
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup";
function App() {

  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div className="font-sans">

      {isSigningUp ? (
        <Signup onToggle={toggleAuthMode} />
      ) : (
        <Login onToggle={toggleAuthMode} />
      )}

    </div>
  );
}
export default App
