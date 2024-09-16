import { useContext, useState  } from "react";
import { Outlet } from "react-router-dom";
import { LangContext } from "../../services/providers/context/langContext";
import { ThemeContext } from "../../services/providers/context/themeContext";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { AuthContext } from "../../services/providers/context/authLogin";
import { useEffect } from "react";

function MainLayout() {
  const navigate = useNavigate();
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  const { token} = useContext(AuthContext)

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // })

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
