import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import AnimalList from '../components/AnimalList'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'

function Adopt({ data: { allContentfulAnimal } }) {
  const newAnimals = new Map()
  allContentfulAnimal &&
    allContentfulAnimal.edges.map(({ node }) => newAnimals.set(node.id, node))

  return (
    <Layout>
      <SEO
        title="Adopta"
        description="Página de animales en adopcion de APA PUPETC"
      />
      <Container>
        <PageTitle>Adopta</PageTitle>
        <h2>Nuestros animales </h2>
        <p>
          Todos ellos buscan una família para siempre, la oportunidad que no han
          tenido aún de ser felices en un hogar. Si alguno de ellos te enamora y
          piensas que eres tú su familia ideal, contáctanos.
        </p>
        <AnimalList animals={newAnimals} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulAnimal(filter: { node_locale: { eq: "es" } }) {
      edges {
        node {
          id
          title
          adopted
          age
          breed
          description {
            description
          }
          weight
          slug
          size
          entrance
          pictures {
            id
            file {
              url
            }
          }
        }
      }
      distinct(field: id)
    }
  }
`

export default Adopt
