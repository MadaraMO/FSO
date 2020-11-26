import { useState } from 'react'

export const useField = (name) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    // tukšā patrona?
    const onReset = () => {
        setValue('')
    }

    return {
        name,
        value,
        onChange,
        onReset
    }
}