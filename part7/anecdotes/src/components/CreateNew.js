import { useField } from '../hooks'
import { useHistory } from 'react-router-dom'

const CreateNew = ({ addNew }) => {
    const history = useHistory()
    const [content, resetContent] = useField('text')
    const [author, resetAuthor] = useField('text')
    const [info, resetInfo] = useField('text')

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

    const resetAll = (e) => {
        e.preventDefault()
        resetContent()
        resetAuthor()
        resetInfo()

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
          <input {...author} />
                </div>
                <div>
                    url for more info
          <input {...info} />
                </div>
                <button>create</button>
                <button type='reset' onClick={resetAll}>reset</button>
            </form>
        </div >
    )
}

export default CreateNew