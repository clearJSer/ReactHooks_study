import React, { useState, useCallBack, useEffect } from "react"

export default function useRequest(cb) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [result, setResult] = useState('')

  const doRequest = useCallBack(() => {
    return new Promise(async (resolve, rejcet) => {
      try {
        await cb()
        setLoading(false)
        resolve()
      } catch (error) {
        setLoading(false)
        rejcet(error)
      }
    }).then(value => {
      setResult(value)
    }).cache(error => {
      setError(error)
    })
  })


  return { loading, error, result, doRequest }
}
export function useRequest2(url) {

  // useRequest.js
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return [data, isLoading, error];
}

