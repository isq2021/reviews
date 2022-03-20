import { createContext, useState } from "react";

export const GeneralContext = createContext([]);

export const Generalprovider = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);

  const data = {
    allReviews: allReviews,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
