/*import { useState, useEffect } from "react";

const useFetch = (url, newParameter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [newParameter]);  //add newParameter in dependency array

  return [data];
};

export { useFetch }*/
