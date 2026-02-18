import React from "react";
import { AuthProvider } from "./AuthContext";
import UserStatus from "./UserStatus";

export default function App() {
  return (
    <AuthProvider>
      <div style={{ padding: 20 }}>
        <h1>Auth Context Demo</h1>
        <UserStatus />
      </div>
    </AuthProvider>
  );
}
