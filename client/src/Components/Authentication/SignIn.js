import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../../CSS/login.css';

const SignIn = () => {
  let history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    let f = false;
    for (let fields in user) {
      if (!user[fields]) {
        alert("Please fill all the fields");
        f = true;
        break;
      }
    }
    if (f) {
      return;
    }

    const res = await fetch("https://realestate-backen.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 400) {
      alert(data.error);
      console.log(data);

    } else if (data.status === "not authorize") {
      alert("Wrong Password");

    } else if (data.status === "failed") {
      alert("User does not exists");
      
    } else {
      localStorage.setItem("token", data.authtoken);

      localStorage.setItem("user", JSON.stringify(user));

      history("/homepage");
    }
    
  }
  
  return (

    <>
      <div className="form-container">
        <div className="parent-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <br />
            <h1 className="logo">Logo</h1>
            <br />
            <p>Enter your credentials to access your account</p>
            <br />
            <br />
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                aria-describedby="emailHelp"
                placeholder="User ID"
              i/>
            </div>
            <br />
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"
              />
            </div>
            <br />
            <br />

            <button type="submit" className="btn-primary">
              Sign In
            </button>
            <br />
            <br />
            <Link to="/register">
              <button type="submit" className="btn-light">
                Sign Up
              </button>
            </Link>
          </form>
          <br />
          <br />
          <div className="bottom-container">
            <p>
              Don't have an account? <Link to="/register" className="signup-link">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
