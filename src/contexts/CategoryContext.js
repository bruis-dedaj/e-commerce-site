import React, { useState, createContext } from "react";

export const CategoryContext = createContext({
  category: "all",
  setCategory: () => {},
});

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("all");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => React.useContext(CategoryContext);
