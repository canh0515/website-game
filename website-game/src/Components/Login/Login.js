import "./login.css";
import { useState } from "react";
function Login() {
  function Button({ onClick }) {
    return (
      <div>
        <button onClick={onClick}>Login</button>
      </div>
    );
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Click = () => {
    console.log("test");
  };

  return (
    <>
      <div className="wrapper">
        <div className="login-form">
          <input
            value={email}
            type="text"
            placeholder="Email or Phone"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            value={password}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={Click} />
        </div>
      </div>
    </>
  );
}
export default Login;
