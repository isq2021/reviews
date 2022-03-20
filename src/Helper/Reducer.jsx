import { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";

export const Reducer = (action, state) => {
  const { getData } = useContext(GeneralContext);
  switch (action) {
    case "randomizeUser":
      return getData();
    default:
      return state;
  }
};
