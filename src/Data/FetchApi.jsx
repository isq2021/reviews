import axios from "axios";
import React from "react";

function FetchApi() {
  const URL = "https://randomuser.me/api/?gender=female";
  const getData = async () => {
    try {
    } catch (error) {
      console.log(error, "Could not fetch damn it ");
    }
  };

  return <div>FetchApi</div>;
}

export default FetchApi;
