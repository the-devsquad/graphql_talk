import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, setColor, fonts } from '../styles'
import Button from './Button'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { GET_CARDS } from '../App'

const DELETE_CARD = gql`
  mutation DeleteCard($id: ID!) {
    deleteCard(id: $id) {
      description
    }
  }
`

export default ({ children, id, color }) => {
  const [deleteCard] = useMutation(DELETE_CARD)

  const onDelete = id => 
  {
    deleteCard({ variables: { id }, refetchQueries: [{ query: GET_CARDS }] })
      .then(({ data }) => 
      {
        console.log('DELETED CARD!')
      })
      .catch(res => 
      {
        const errors = res.graphQLErrors.map(error => error.message)
        alert(errors)
      })
  }

  return (
    <Card>
      <Color color={color} />
      <Body>
      <Description color={color} >
        <p>{children}</p>
      </Description>
      <ButtonBox>
        <Button type='del' onClick={() => onDelete(id)} />  
        <Button type='check' />
      </ButtonBox>
      </Body>
    </Card>
  )
}

const Card = styled.div`
  min-height: ${px(100)};
  width: ${px(385)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  margin-bottom: ${px(15)};
  ${direction()};
  ${alignment({ main:'space-between' })};
`

const Color = styled.div`
  height: 100%;
  width: ${px(20)};
  background-color: ${props => setColor[props.color]};
  border-top-left-radius: ${px(5)};
  border-bottom-left-radius: ${px(5)};
`


const Body = styled.div`
  height: 100%;
  flex: 1;
  ${direction()}
`
const Description = styled.div`
  & p {
  ${props => fonts({ size:22, color:props.color })};
  };
  padding-left: ${px(15)};
  padding-top: ${px(15)};
  height: 100%;
  flex: .75;
  color: ${setColor.orange};
`
const ButtonBox = styled.div`
  padding-left: ${px(15)};
  padding-right: ${px(15)};
  height: 100%;
  flex: .25;
  ${direction()};
  ${alignment({ main:'space-between' })};
`