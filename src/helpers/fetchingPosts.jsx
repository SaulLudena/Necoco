import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchingPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchingPosts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/post/getAllPosts"
      );
      setPosts(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchingPosts();
  }, []);

  const refreshPosts = () => {
    fetchingPosts();
  };

  return { posts, error, refreshPosts };
}
