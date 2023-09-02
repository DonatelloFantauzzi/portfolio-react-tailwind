import { useState, useEffect } from "react";

import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";

import Logo from "./Logo";
import Links from "./Links";
import Social from "./Social";
import Modal from "./Modal";
// import useThemeSwitcher from "./useThemeSwitcher";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "",
  );

  const onSelectMode = (mode) => {
    setTheme(mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light"),
      );

    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : onSelectMode(
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <header className=" dark:bg-darkBackground mb-12 bg-background">
      <nav className=" mx-auto flex max-w-7xl items-center justify-between  p-10 md:justify-around">
        <div onClick={() => setOpenMenu(!openMenu)} className="z-50 md:hidden">
          {openMenu ? (
            <FaXmark
              size={30}
              color="#ebedec"
              className={openMenu ? "fixed" : ""}
            />
          ) : (
            // <FaBars size={30} color="#312e2e" />
            <FaBars
              size={30}
              color={` ${theme === "dark" ? "#f0f6f5" : "#312e2e"} `}
            />
          )}
        </div>
        {openMenu && <Modal openMenu={openMenu} setOpenMenu={setOpenMenu} />}
        <Links />
        <Logo />
        <Social />

        <button>
          {theme === "dark" ? (
            <FaMoon
              size={30}
              color="#f0f6f5"
              onClick={() => onSelectMode("light")}
              title="icona della luna"
            />
          ) : (
            <FaSun
              size={30}
              color="#312e2e"
              onClick={() => onSelectMode("dark")}
              title="icona del sole"
            />
          )}
        </button>
      </nav>
    </header>
  );
};
export default Nav;
