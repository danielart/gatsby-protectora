import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from '@emotion/styled'

const SubTitle = styled.h1`
  font-size: ${props => (props.small ? '1.5em' : '2em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 3rem;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '3rem')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="Home page" />
      <Container>
        <PageTitle>Home</PageTitle>
        <SubTitle>Envíanos tu mensaje</SubTitle>
        <p>
          Si tienes dudas, sugerencias o curiosidad, o estas interesado en ser
          voluntario, adoptante o establecimiento colaborador, no dudes en
          escribirnos y te contestaremos lo antes posible. Mándanos un email a
          apa.pupetc@gmail.com con tus datos y tus dudas, o puedes contactarnos
          a través de nuestro Facebook o Instagram con un mensaje privado
        </p>
        <SubTitle>Formulario de Adopción</SubTitle>
        <p>
          ¿Te has enamorado de alguno de nuestros peludos? ¿Quieres ser casa de
          acogida? ¿Quieres adoptar aunque aún no te has decidido por alguno en
          concreto? Puedes rellenar el siguiente formulario y nosotros nos
          pondremos en contacto contigo. ¡Gracias!
        </p>
      </Container>
    </Layout>
  )
}

export default Home
