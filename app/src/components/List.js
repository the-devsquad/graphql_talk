import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, setColor, scroll } from '../styles'

export default ({ children }) => {
  return (
    <Outer>
      <Inner>
        <Container>
          {children}
        </Container>
      </Inner>
    </Outer>
  )
}

const Outer = styled.div`
  min-height: ${px(550)};
  width: ${px(440)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  ${direction()};
  ${alignment()};
  margin-right: ${px(50)};
`

const Inner = styled.div`
  height: ${px(530)};
  width: ${px(420)};
  border-radius: ${px(5)};
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, inset ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  ${direction()};
  ${alignment()};
`

const Container = styled.div`
  margin-top: ${px(7)};
  padding-top: ${px(7)};
  height: ${px(520)};
  width: ${px(405)};
  ${direction('column')};
  ${alignment({ main:'flex-start' })};
  ${scroll};
`