import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const useUserData = () => {
  const [user, setUser] = useState({
    userInfo: {
      nombreUsuario: "",
    },
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/user/getUserInfo",

          { CookieToken: Cookies.get("token") }
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return { user, CookieToken: Cookies.get("token") };
};
