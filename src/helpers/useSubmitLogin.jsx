import axios from "axios";
import { useEffect, useState } from "react";

export default function UseSubmitLogin({ credentials, loginEndpoint }) {
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function login() {
      try {
        const response = await axios.post(loginEndpoint, credentials);
        setLoginData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    login();
  }, [credentials, loginEndpoint]);

  return { loginData, loading, error };
}
