import { useState } from "react";
import Registration from "./Registration";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  function handleRegister(userData) {
    setUser(userData);
  }

  return (
    <>
      {user === null ? (
        <Registration onRegister={handleRegister} />
      ) : (
        <Profile user={user} />
      )}
    </>
  );
}

export default App
