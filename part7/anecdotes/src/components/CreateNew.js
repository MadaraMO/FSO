import { useField } from '../hooks'
// import { useRef } from 'react'

const CreateNew = ({ addNew, history }) => {
    // const input = useRef()
    const content = useField('name')
    const author = useField('author')
    const info = useField('info')
    const reset = useField('')


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

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form >
                {/* <form > */}
                <div>
                    content
          <input
                        {...content}
                    // name={content.name}
                    // value={content.value}
                    // onChange={content.onChange}
                    // {...content}
                    // ref={input}
                    />
                </div>
                <div>
                    author
          <input
                        {...author}
                    // name={author.name}
                    // value={author.value}
                    // onChange={author.onChange}
                    // {...author}
                    // ref={input}
                    />
                </div>
                <div>
                    url for more info
          <input
                        {...info}
                    // name={info.name}
                    // value={info.value}
                    // onChange={info.onChange}
                    // ref={input}
                    />
                </div>
                <button onClick={handleSubmit}>create</button>
                <button onClick={() => reset}>reset</button>
            </form>
        </div >
    )
}

export default CreateNew