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
      done
    }
  }
`

export default () => {
  const { error, data } = useQuery(GET_CARDS)
  error && console.log(error)

  const compare = (a, b) => {
    const dA = a.done
    const dB = b.done

    let c = 0

    if (dA === true && dB === false) c = 1
    else c = -1

    return c
  }

  data && console.log(data)

  return (
    <Wrapper>
      <List>
        {data &&
          data.cards.sort(compare).map((card, i) => (
            <Card key={i} id={card.id} color={card.color} done={card.done}>
              {card.description}
            </Card>
          ))}
      </List>
      <Form />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${direction()};
  ${alignment()};
`
