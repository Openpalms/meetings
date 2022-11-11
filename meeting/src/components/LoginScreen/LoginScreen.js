import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
const LoginScreen = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <div className="position-absolute shadow p-3 mb-5 bg-body rounded top-50 start-50 translate-middle ">
      {isUser ? (
        <Login setIsUser={setIsUser} />
      ) : (
        <SignUp setIsUser={setIsUser} />
      )}
    </div>
  );
};

export default LoginScreen;
