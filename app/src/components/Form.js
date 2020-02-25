import React, {useState} from 'react'
import styled from 'styled-components'
import { px, direction, alignment, setColor, fonts } from '../styles'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { GET_CARDS } from '../App'
import Menu from './Menu'


const CREATE_CARD = gql`
  mutation createCard($description: String!, $color: String!) {
    createCard(description: $description, color: $color) {
      description
    }
  }
`

export default () => {
  const [description, setDescription] = useState('')
  const [color, setColor] = useState(null)

  const [createCard] = useMutation(CREATE_CARD)

  const submitForm = e => {
    e.preventDefault()

    createCard({ variables: { description, color }, refetchQueries: [{ query: GET_CARDS }] })
    .catch((res) => 
    {
      const errors = res.graphQLErrors.map(error => error.message)
      alert(errors)
    })

    setDescription('')
    setColor(null)
  }

  return (
    <Wrapper>
      <Title> CREATE A CARD </Title>
      <Form onSubmit={submitForm}>
        <Input onChange={e => setDescription(e.target.value)} value={description} />
        <Box>
          <Button type='submit'> Send </Button>
          <Menu onColor={value => setColor(value)} />
        </Box>
      </Form>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  ${direction('column')};
  ${alignment()};
`

const Form = styled.form`
  min-height: ${px(100)};
  width: ${px(420)};
  border-radius: ${px(5)};
  padding: ${px(30)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  ${direction('column')};
  ${alignment({ main:'space-between' })};
`

const Input = styled.input`
  width: ${px(300)};
  height: ${px(40)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, inset ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  background-color: ${setColor.main};
  margin-bottom: ${px(30)};
  border-radius: ${px(5)};
  padding-left: ${px(15)};
  ${fonts({ color:'purple', font:'oswald' })};
`

const Button = styled.button`
  width: ${px(100)};
  height: ${px(40)};
  background-color: ${setColor.blue};
  color: ${setColor.main};
  border: 1px solid ${setColor.purple};
  ${fonts({ color:'white', font:'oswald' })};
  border-radius: ${px(5)};
`

const Title = styled.h3`
  ${fonts({ font:'courgette', size:26, weight:'bold', color:'blue' })};
  margin-bottom: ${px(15)};
  text-shadow: ${px(-1)} 0 ${setColor.purple}, 0 ${px(1)} ${setColor.purple}, ${px(1)} 0 ${setColor.purple}, 0 ${px(-1)} ${setColor.purple};
`

const Box = styled.div`
  width: ${px(205)};
  margin-left: ${px(106)};
  ${direction()};
  ${alignment({ main:'space-between' })};
`