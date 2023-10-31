import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useProtectedRoute() {
  let [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  let [isUser, setIsUser] = useState();
  let [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData !== null) {
      if (userData.role === "admin") {
        setIsUser(false);
        setIsAdmin(true);
      } else if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      }
    } else {
      setIsUser(false);
      setIsAdmin(false);
    }
  }, []);

  return [isUser, isAdmin, userData];
}

export default useProtectedRoute;
