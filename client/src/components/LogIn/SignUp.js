import { useState } from "react";
import LogIn from "../LogIn/LogIn";
import { Link } from "react-router-dom";

function SignUp({ setCurrentUser, currentUser }) {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
            }),
        })
            .then((r) => r.json())
            .then((r) => setUser);
        // .catch(error => alert(error)) : alert("passwords must match!")
    }

    return (
        <>
            {currentUser ? (
                <LogIn />
            ) : (
                <div className="input-group">
                    <h4 className="input-title">Sign Up!</h4>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="field">
                            <input
                                autoComplete="off"
                                placeholder="First Name"
                                className="input-field"
                                type="text"
                                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                                value={user.firstname}
                            />
                        </div>
                        <div className="field">
                            <input
                                autoComplete="off"
                                placeholder="Last Name"
                                className="input-field"
                                type="text"
                                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                                value={user.lastname}
                            />
                        </div>
                        <div className="field">
                            <input
                                autoComplete="off"
                                placeholder="E-mail"
                                className="input-field"
                                type="email"
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
                                value={user.password}
                            />
                        </div>
                        <input className="button" type="submit" value="Sign Up!" />
                        <div>
                        <Link className="link" to="/LogIn">
              Already have an account?
            </Link>
            </div>
                    </form>
                </div>
            )}
        </>
    );
}
export default SignUp;