import { useState } from "react";

function Registration({ onRegister }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    const inputErrors = {};
    const lettersOnly = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) {
      inputErrors.firstName = "First name is required";
    } else if (!lettersOnly.test(firstName.trim())) {
      inputErrors.firstName = "First name must contain only letters";
    }

    if (!lastName.trim()) {
      inputErrors.lastName = "Last name is required";
    } else if (!lettersOnly.test(lastName.trim())) {
      inputErrors.lastName = "Last name must contain only letters";
    }

    if (!email.trim()) {
      inputErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      inputErrors.email = "Please enter a valid email (e.g., person@something.com)";
    }

    if (!password) {
      inputErrors.password = "Password is required";
    } else if (password.length < 8) {
      inputErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      inputErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      inputErrors.confirmPassword = "Passwords do not match";
    }

    return inputErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onRegister({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
      });
    }
  }

  return (
    <div className="form-container">
      <h1>Profile Registration</h1>
      <form onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="person@something.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 8 characters"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Registration
