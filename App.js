import "react-native-gesture-handler";
import * as React from "react";

import { AuthProvider } from "./context/AuthContext";
import Router from "./navigation/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
