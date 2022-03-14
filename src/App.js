import React, { useState } from "react";
import { GlobalStyles } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./config/theme";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SupportPage from "./pages/SupportPage";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route
          element={
            <HomePage
              theme={theme === "light" ? lightTheme : darkTheme}
              changeTheme={setTheme}
            />
          }
          path="/"
          exact={true}
        />
        <Route
          element={
            <PrivacyPage
              theme={theme === "light" ? lightTheme : darkTheme}
              changeTheme={setTheme}
            />
          }
          path="/privacy"
        />
        <Route
          element={
            <TermsPage
              theme={theme === "light" ? lightTheme : darkTheme}
              changeTheme={setTheme}
            />
          }
          path="/terms"
        />
        <Route
          element={
            <SupportPage
              theme={theme === "light" ? lightTheme : darkTheme}
              changeTheme={setTheme}
            />
          }
          path="/support"
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
