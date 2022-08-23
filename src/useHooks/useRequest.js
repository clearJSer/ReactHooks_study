import React, { useState, useCallBack } from "react"

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