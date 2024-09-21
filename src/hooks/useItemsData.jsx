import { useEffect } from "react";
import { useState } from "react";

const useItemsData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400 || !response.ok) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((responseJson) => setData(responseJson))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useItemsData;
