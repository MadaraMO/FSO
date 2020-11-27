import { useState } from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const resetValue = () => {
        setValue('')
    }
    // spread the joy, somehow
    // return { type, value, onChange, reset }

    const input = { type, value, onChange }

    return { input, resetValue }


}