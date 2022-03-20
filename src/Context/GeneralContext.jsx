import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

export const GeneralContext = createContext([]);

/* const surprizeMe = (state, action) => {
  switch (action) {
    case "randomizeUser":
      return getDataNahren();
    default:
      return state;
  }
}; */

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

    getData: getData,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
