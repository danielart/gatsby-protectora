import React from 'react'
import styled from '@emotion/styled'
import Animal from '../components/Animal'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const AnimalList = ({ animals }) => {
  const animalRows = []
  animals.forEach((value, key) => {
    animalRows.push(<Animal animal={value} />)
  })

  return <List>{animalRows}</List>
}

export default AnimalList
