import React, { useState } from "react";
import "./App.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

    // Perform form submission logic here
  

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (!event.target.validity.valid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  }
 const handleSubmit = (event) => {
  event.preventDefault();
  if (!name || !email || !password || !confirmPassword) {
    setErrorMessage("Error:All fields are required");
  } else if (password !== confirmPassword) {
    setErrorMessage("Passwords do not match");
  } else {
    setSuccessMessage("Successfully Signed Up!");
    // here you can submit the form data to your backend or do any other action
  }
};

return (
  <div className="container">
  <h1 className="heading">Signup</h1>
  <form className="credentials" onSubmit={handleSubmit}>

    <div>
      <input type="text"value={name} placeholder="Name" onChange={(event) => setName(event.target.value)}
      />
    </div><br/>
    <div>
      <input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
    </div><br/>
    <div>
      <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
    </div><br/>
    <div>
      <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)}/>
    </div><br/>
    {errorMessage && <div className="error"> {errorMessage}</div>}
    {successMessage && <div className="success">{successMessage}</div>}
    <button id="button" type="submit">Signup</button>
  </form>
  </div>
);
}

export default Form;


