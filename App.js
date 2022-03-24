import "react-native-gesture-handler";
import * as React from "react";

import { AuthProvider } from "./context/AuthContext";
import Router from "./navigation/Router";

export default function App() {
  return (
    <AuthProvider>
        <Router />
    </AuthProvider>
  );
}
