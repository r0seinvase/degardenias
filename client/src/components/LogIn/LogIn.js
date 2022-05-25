import './Login.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from '../Home/Home';

function Login({ setCurrentUser, currentUser }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault(e);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
          setErrorMessage("Invalid email or password");
        } else {
          setCurrentUser(data);
        }
      });
    console.log(currentUser);
  }

  return (
    <>
      {currentUser ? (
        <Home />
      ) : (
        <div className="card">
          <h4 className="title">Log In!</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            {errorMessage && <p style={{ color: "#ce3030" }}>{errorMessage}</p>}
            <div className="field">
              <input
                autoComplete="off"
                placeholder="E-mail"
                className="input-field"
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                placeholder="Password"
                className="input-field"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password_digest}
              />
            </div>
            <input className="btn" type="submit" value="Login!" />
            <Link className="btn-link" to="/SignUp">
              Sign up!
            </Link>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;