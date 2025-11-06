import { useState } from "react";
import {Signup} from '../../pages/Signup'
import {Login} from '../../pages/Login'
export const AuthSwitch = () => {
  // This is the state logic you asked for!
  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSigningUp(prev => !prev);
  };

  return (
    // This is where the conditional rendering happens.
    <div className="min-h-screen">
      {isSigningUp ? (
        <Signup onToggle={toggleAuthMode} />
      ) : (
        <Login onToggle={toggleAuthMode} />
      )}
    </div>
  );
};