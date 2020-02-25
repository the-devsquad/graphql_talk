import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, scroll } from './styles'

export default () => {
  return (
    <Wrapper>
      <Container>
        
        {
          [0,1,2,3,4,5,6].map((card, i) => <Box key={i}> {card} </Box>)
        }

      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${alignment()};
  ${direction()};
`

const Container = styled.div`
  border: 1px solid teal;
  height: ${px(515)};
  width: ${px(365)};
  ${direction('column')};
  ${alignment({ main:'flex-start' })};
  ${scroll};
`

const Box = styled.div`
  min-height: ${px(140)};
  width: ${px(330)};
  background-color: orange;
  border-radius: ${px(5)};
  margin-bottom: ${px(15)};
`