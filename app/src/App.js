import React from 'react'
import styled from 'styled-components'
import { direction, alignment } from './styles'
import List from './components/List'
import Form from './components/Form'
import Card from './components/Card'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_CARDS = gql`
  query GetData {
    cards {
      description
      id
      color
    }
  }
`

export default () => {
  const { error, data } = useQuery(GET_CARDS)
  error && console.log(error)
  // data && console.log(data[])

  return (
    <Wrapper>
      <List>
        {data && data.cards.map((card, i) => 
          <Card 
            key={i} 
            id={card.id}
            color={card.color}
          > 
            {card.description} 
          </Card>) 
        }
      </List>
      <Form>

      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${direction()};
  ${alignment()};
`

