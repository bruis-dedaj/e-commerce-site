import React from "react";
import { navLinks } from "../../constants/nav-links";
import Cart from "../Cart";
import { useCategoryContext } from "../../contexts/CategoryContext";

const Header = () => {
  console.log("Header rendered");

  const { category, setCategory } = useCategoryContext();

  console.log({ category, setCategory });

  return (
    <header className="w-full flex justify-center items-center fixed bg-slate-300 h-16">
      <nav className="max-w-7xl w-full px-8 py-2 flex justify-between items-center">
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              onClick={() => setCategory(link.path)}
              key={link.key}
              className={`block capitalize hover:text-green-400 hover:border-b-2 hover:border-b-green-200 ${
                category === link.path
                  ? "border-b-2 border-b-green-400"
                  : "border-b-2 border-b-transparent"
              }`}>
              {link.title}
            </button>
          ))}
        </ul>

        <div>icon:{category}</div>

        <Cart />
      </nav>
    </header>
  );
};

export default Header;
