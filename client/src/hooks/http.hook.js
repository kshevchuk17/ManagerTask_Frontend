import {useCallback, useState} from 'react'
import axios from "axios";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'get', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                headers['Content-type'] = 'application/json'
                headers['Content-Type'] = 'text/plain;charset=UTF-8'
            }

            const response = await axios[method]("http://127.0.0.1:8000" + url, body, headers)
            console.log('response', response)
            setLoading(false)
            if (response.status >= 200 && response.status < 300) {
                return response.data
            } else {
                return false
            }


        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}