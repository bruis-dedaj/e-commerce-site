import React from "react";
import { navLinks } from "../../constants/nav-links";
import Cart from "../Cart";
import { useCategoryContext } from "../../contexts/CategoryContext";
import logo from "../../assets/a-logo.png";

const Header = () => {
  console.log("Header rendered");

  const { category, setCategory } = useCategoryContext();

  console.log({ category, setCategory });

  return (
    <header className="w-full flex justify-center items-center fixed  bg-white h-16 font-raleway top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl w-full px-8 py-2 flex justify-between items-center">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              onClick={() => setCategory(link.path)}
              key={link.key}
              className={`block capitalize hover:text-green-400 hover:border-b-4 hover:border-b-green-200 ${
                category === link.path
                  ? "border-b-4 border-b-green-400 pb-4"
                  : "border-b-4 border-b-transparent pb-4"
              }`}>
              {link.title}
            </button>
          ))}
        </ul>

        <div className="logo">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <Cart />
      </nav>
    </header>
  );
};

export default Header;
