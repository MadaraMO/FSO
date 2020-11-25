import { useField } from '../hooks'
import { useRef } from 'react'

const CreateNew = ({ addNew, history }) => {
    // const [inputValue, setInputValue] = useState('')
    const input = useRef()
    const content = useField('name')
    const author = useField('author')
    const info = useField('info')

    // par šo bija problēmas iedomāties
    const handleSubmit = (e) => {
        e.preventDefault()
        addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })

        history.push('/')
    }

    const handleReset = (e) => {
        input.current.value = ''

    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form >
                <div>
                    content
          <input
                        //   {...content}
                        name={content.name}
                        value={content.value}
                        onChange={content.onChange}
                    />
                </div>
                <div>
                    author
          <input
                        //   {...author}
                        name={author.name}
                        value={author.value}
                        onChange={author.onChange}
                        ref={input}
                    />
                </div>
                <div>
                    url for more info
          <input
                        //   {...info}
                        name={info.name}
                        value={info.value}
                        onChange={info.onChange}
                        ref={input}
                    />
                </div>
                <button onClick={handleSubmit}>create</button>
                <button onClick={handleReset}>reset</button>
            </form>
        </div>
    )
}

export default CreateNew