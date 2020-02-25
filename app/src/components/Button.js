import React from 'react'
import styled from 'styled-components'
import { px, direction, alignment, setColor } from '../styles'
import check from '../Images/check.svg'
import wrong from '../Images/wrong.svg'


export default ({ type, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Inner type={type}>
        { type === 'check' ? <Image src={check} /> : <Image src={wrong} /> }
      </Inner>
    </Button>
  )
}

const Button = styled.div`
  width: ${px(30)};
  height: ${px(30)};
  border-radius: 100%;
  box-shadow: ${px(-3)} ${px(-3)} ${px(7)} ${setColor.shadow1}, ${px(3)} ${px(3)} ${px(5)} ${setColor.shadow2};
  ${direction()};
  ${alignment()};

  &:hover {
    box-shadow: ${px(-1)} ${px(-1)} ${px(5)} ${setColor.shadow1}, ${px(1)} ${px(1)} ${px(3)} ${setColor.shadow2};
  }
`
const Inner = styled.div`
  width: ${px(28)};
  height: ${px(28)};
  border-radius: 100%;
  background-color: ${props => props.type === 'del' ? '#d63031' : '#00b894' };
  ${direction()};
  ${alignment()};
`
const Image = styled.img`
  width: ${px(14)};
  height: ${px(14)};
  filter: invert(93%) sepia(1%) saturate(6898%) hue-rotate(190deg) brightness(105%) contrast(81%);
`