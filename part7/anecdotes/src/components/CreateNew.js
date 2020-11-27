import { useField } from '../hooks'
import { useHistory } from 'react-router-dom'

const CreateNew = ({ addNew }) => {
    const history = useHistory()
    // spread the joy, somehow 
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNew({
            content: content.input.value,
            author: author.input.value,
            info: info.input.value,
            votes: 0
        })
        history.push('/')
    }

    const resetAll = (e) => {
        e.preventDefault()
        content.resetValue()
        author.resetValue()
        info.resetValue()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
          <input {...content.input} />
                </div>
                <div>
                    author
          <input {...author.input} />
                </div>
                <div>
                    url for more info
          <input {...info.input} />
                </div>
                <button>create</button>
                <button type='reset' onClick={resetAll} >reset</button>
            </form>
        </div >
    )
}

export default CreateNew