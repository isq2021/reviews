import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext([]);

export const Generalprovider = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);
  const URL = "https://randomuser.me/api/?gender=female";

  const getData = async () => {
    try {
      const req = await axios.get(URL);

      setAllReviews(req.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const data = {
    allReviews: allReviews,
    setAllReviews: setAllReviews,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
