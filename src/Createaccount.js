import "./pagestyle.css";
//import "./background.css";
import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "./context";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [dob, setDob] = useState("");
  const [accountType, setAccountType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const ctx = useContext(UserContext);

  function handleNewAccount(event) {
    event.preventDefault();
    let nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(username)) {
      setNameError("Name can only contain alphabets");
      return;
    } else {
      setNameError("");
    }

    // Validate email
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    } else {
      setPasswordError("");
    }

    // Validate phone number
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    } else {
      setPhoneError("");
    }

    // Calculate age based on date of birth
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Push values to UserContext
    ctx.users.push({ username, email, age, gender, balance: 0 });

    // Submit the form
    setIsLoginSuccess(true);
  }

  function handleAddAccount() {
    // Reset form values
    setUsername("");
    setEmail("");
    setPassword("");
    setIsLoginSuccess(false);
    setDob("");
    setPhoneNumber("");
    setAccountType("");
  }

  const isFormValid = username && email && password;

  return (
    <>
      <div className="Home-page"></div>
      <center>
        {isLoginSuccess ? (
          <>
            <p>Created Account Successfully</p>
            <button type="button" onClick={handleAddAccount}>
              Add another account
            </button>
            <br />
            <br />
            <button type="button">
              <a href="">Withdraw</a>
            </button>
            <button type="button">
              <a href="">Deposit</a>
            </button>
          </>
        ) : (
          <form onSubmit={handleNewAccount}>
            <br />
            <h1>Create Account</h1>
            <br />

            <input
              id="name"
              type="text"
              placeholder="Customer name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span style={{ color: "red" }}>{nameError}</span>
            <br />
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              placeholder="Phone number"
              pattern="[0-9]{10}"
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
            <span style={{ color: "red" }}>{phoneError}</span>
            <br />
            <select
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              required
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            <br />
            <br />
           
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <span style={{ color: "red" }}>{emailError}</span>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <span style={{ color: "red" }}>{passwordError}</span>

            <button
              type="submit"
              onClick={handleNewAccount}
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        )}
      </center>
    </>
  );
}
