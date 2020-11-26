import { useField } from '../hooks'
// import { useRef } from 'react'

const CreateNew = ({ addNew, history }) => {
    // const input = useRef()
    const content = useField('name')
    const author = useField('author')
    const info = useField('info')


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

    // Tikpat labi var arī atstāt tukšu. pieļauju, ka nevajadzētu, bet, hei, man strādā. kāpēc?
    const handleReset = () => {
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            {/* <form onSubmit={handleSubmit}> ar enter tāpat aiziet */}
            <form >
                <div>
                    content
          <input
                        //   {...content}
                        name={content.name}
                        value={content.value}
                        onChange={content.onChange}
                        onReset={content.onReset}
                    // ref={input}
                    />
                </div>
                <div>
                    author
          <input
                        //   {...author}
                        name={author.name}
                        value={author.value}
                        onChange={author.onChange}
                        onReset={author.onReset}
                    // ref={input}
                    />
                </div>
                <div>
                    url for more info
          <input
                        //   {...info}
                        name={info.name}
                        value={info.value}
                        onChange={info.onChange}
                        onReset={info.onReset}
                    // ref={input}
                    />
                </div>
                <button onClick={handleSubmit}>create</button>
                <button onClick={handleReset}>reset</button>
            </form>
        </div>
    )
}

export default CreateNew