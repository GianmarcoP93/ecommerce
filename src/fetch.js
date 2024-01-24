import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/productsSlice";
import { useEffect, useState } from "react";

export const useFetchApi = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(addProducts(response.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);
  return { isLoading, error };
};
