import './Login.css';
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
        <Home currentUser={currentUser} />
      ) : (
        <div className="input-group">
          <h4 className="input-title" >log In</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            {errorMessage && <p style={{ color: "#ce3030" }}>{errorMessage}</p>}
            <div>
              <input
                autoComplete="off"
                placeholder="E-mail"
                className="input-field"
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </div>
            <div>
              <input
                autoComplete="off"
                placeholder="Password"
                type="password"
                className="input-field"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password_digest}
              />
            </div>
            <input type="submit" value="Login!" className="button" />
            <div>
            <Link className="link"to="/SignUp">
              Sign up!
            </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;