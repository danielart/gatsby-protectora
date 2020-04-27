import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import moment from 'moment'

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
`
const Card = styled.div`
  background: #f7f7f7;
  padding: 5px;
  width: 47%;
  box-shadow: 21px 23px 19px -26px black;
  margin-top: 10px;
  color: #292525;
  border-radius: 20px;
`
const CardHeader = styled.div`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
const CardBody = styled.div`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
const CardFooter = styled.div`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Label = styled.span`
  font-weight: 600;
`

const StyledImg = styled.div`
  height: 250px;
  border: 1px solid gray;
  margin: 0 1rem 1rem 1rem;
  text-align: center;
  line-height: 1.6;
`

const Animal = ({ animal, ...props }) => {
  const {
    id,
    title,
    age,
    breed,
    description: { description },
    weight,
    // slug,
    size,
    entrance,
    //pictures,
  } = animal
  return (
    <Card key={`animal-card-${id}`}>
      <CardHeader>
        <Title>{title}</Title>
        <StyledImg>Imagen</StyledImg>
      </CardHeader>
      <Date>
        <Label>Entrada:</Label> {moment(entrance).format('DD-MM-YYYY')}
      </Date>
      <CardBody>
        <div>
          <Label>Edad (aprox): </Label>
          {age}
        </div>
        <div>
          <Label>Raza: </Label>
          {breed}
        </div>
        <div>
          <Label>Tamaño: </Label>
          {size}
        </div>
        <div>
          <Label>Peso: </Label>
          {weight}
        </div>
        <div> {description}</div>
      </CardBody>
      <CardFooter>
        <button>insta</button>
      </CardFooter>
    </Card>
  )
}

export default Animal
