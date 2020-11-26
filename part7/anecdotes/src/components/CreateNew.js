import { useField } from '../hooks'

const CreateNew = ({ addNew, history }) => {
     // spread the joy, somehow 
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        // par history vēl
        history.push('/')
    }

    const reset = (e) => {
        e.preventDefault()
        content.reset()
        author.reset()
        info.reset()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
          <input {...content} />
                </div>
                <div>
                    author
          <input {...author}  />
                </div>
                <div>
                    url for more info
          <input {...info}  />
                </div>
                <button >create</button>
                <button type='reset' onClick={reset}>reset</button>
            </form>
        </div >
    )
}

export default CreateNew