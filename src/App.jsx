import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./services/router/router";
import { LangProvider } from "./services/providers/context/langContext";
import { ThemeContext } from "./services/providers/context/themeContext";
import { Provider } from "react-redux";
import store from "./services/store/store";
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./services/providers/context/authLogin";

function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AuthProvider value={{ token, setToken }}>
    <Provider store={store}>
    <LangProvider value={{ lang, setLang }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <RouterProvider router={Router} />
        </ThemeContext.Provider>
    </LangProvider>
    </Provider>
    </AuthProvider>
  );
}

export default App;
