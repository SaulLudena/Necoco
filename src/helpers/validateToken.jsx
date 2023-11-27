import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

export default function ValidateToken() {
  const [infoValidation, setInfoValidation] = useState({});

  const router = Router;
  useEffect(() => {
    async function validateToken() {
      try {
        const response = await axios.get(
          "http://localhost:3001/login/protectedRoute",
          {
            headers: {
              authorizationtoken: Cookies.get("token"),
            },
          }
        );
        if (response.data.status !== 200) {
          router.push("/");
        }
        setInfoValidation(response.data);
        router.push("/mainFeed");
      } catch (error) {
        router.push("/");
        console.log(error);
      }
    }
    validateToken();
  }, []);
  return { infoValidation };
}
