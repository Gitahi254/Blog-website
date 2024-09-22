// This is how a custom hook is created
// The function we are writing here is the hook itself

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // abort controler
    const abortConst = new AbortController();


    setTimeout(() => {
      fetch(url, {signal: abortConst.signal})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error &updates the state
        if (err.name === 'AbortError'){
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
        
      })
    }, 100);
    // this is the useEffect cleanup function
    return () => abortConst.abort();




  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;