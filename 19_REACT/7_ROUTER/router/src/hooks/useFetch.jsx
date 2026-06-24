import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod("POST")
        }
    }
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(false)
            setError(null)
        }
        fetchData()
    }, [url])
    useEffect(() => {
        async function httpRequest() {
            if (method === "POST") {
                setLoading(true)
                const res = await fetch(url, config)
                const json = await res.json()
                setCallFetch(json)
                setData(prevData => [...prevData, json])
                setLoading(false)
            }
        }
        httpRequest()
    }, [config, method])
    return { data, loading, error, httpConfig, callFetch }
}