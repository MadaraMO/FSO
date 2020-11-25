import { useField } from '../hooks'

const CreateNew = ({ addNew, history }) => {

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

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
          <input {...content}
                    // name={content.name}
                    // value={content.value}
                    // onChange={content.onChange}
                    />
                </div>
                <div>
                    author
          <input  {...author}
                    // name={author.name}
                    // value={author.value}
                    // onChange={author.onChange} 
                    />
                </div>
                <div>
                    url for more info
          <input {...info}
                    // name={info.name}
                    // value={info.value}
                    // onChange={info.onChange} 
                    />
                </div>
                <button>create</button>
            </form>
        </div>
    )
}

export default CreateNew