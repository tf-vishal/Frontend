import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function UserStatus() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div style={{ marginTop: 20 }}>
      {user ? (
        <>
          <h3>Welcome, {user.name} 👋</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>You are not logged in</h3>
          <button onClick={() => login("Joy Boy")}>
            Login
          </button>
        </>
      )}
    </div>
  );
}
