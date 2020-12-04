import { useField } from '../hooks'
import { useHistory } from 'react-router-dom'

import styled from '@emotion/styled'
import css from '@styled-system/css'
import Space from '../design/Space'
import Section from '../design/Section'

const Form = styled('form')(
    css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    })
)

const Label = styled('div')(
    css({
        display: 'flex',
        color: 'darkGrey',
        bg: 'lightGrey',
        p: 1,
        border: '2px solid transparent',
        borderColor: 'lightGrey',
        borderRadius: 8,
        '&:hover': {
            bg: 'orchid',
        }
    })
)

const Input = styled('input')(
    css({
        color: 'darkGrey',
        bg: 'gainsboro',
        width: '100%',
        border: '1px solid transparent',
        borderColor: 'lightGrey',
        borderRadius: 6,
        '&:hover': {
            bg: 'lightGray',
        },
        '&:focus': {
            outline: 'none',
        },
    })
)

const Button = styled('button')(
    ({ bg }) => css({
        color: 'ligthGrey',
        py: 1,
        px: 5,
        bg: bg,
        border: '1px solid transparent',
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
        '&: hover': {
            bg: 'teal',
        }
    })
)


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
        <Section type='column' align='center'>
            <h2>create a new anecdote</h2>
            <Form onSubmit={handleSubmit}>
                <Label>content: <Input {...content} /></Label>
                <Space padding={2} />
                <Label >author: <Input {...author} /></Label>
                <Space padding={2} />
                <Label> info:  <Input {...info} /></Label>
                <Space padding={10} />
                <Section justify='space-between'>
                    <Button bg='Aquamarine'>create</Button>
                    <Space px={3} />
                    <Button bg='LightSlateGray' type='reset' onClick={resetAll}>reset</Button>
                </Section>

            </Form>
        </Section >
    )
}

export default CreateNew