import React, { useCallback, useState } from "react";
import { Signup } from '../../pages/Signup';
import { Login } from '../../pages/Login';


export const AuthSwitch = ({ defaultSigningUp = false }) => {
  const [isSigningUp, setIsSigningUp] = useState(() => Boolean(defaultSigningUp));

  // stable toggle handler
  const toggleAuthMode = useCallback(() => {
    setIsSigningUp((prev) => !prev);
  }, []);

  return (
    // announce view changes to assistive tech
    <div className="min-h-screen" role="region" aria-live="polite" aria-atomic="true">
      {isSigningUp ? (
        <Signup onToggle={toggleAuthMode} />
      ) : (
        <Login onToggle={toggleAuthMode} />
      )}
    </div>
  );
};