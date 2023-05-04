import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [state, setState] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return [state, getData, hasError, isLoading];
};

export default useFetch;
