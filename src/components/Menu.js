import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  section {
    display: flex;
    justify-content: center;
  }

  div {
    padding: 1.5em;
    mmargin-left: 1em;
    min-width: 100px;
    text-align: center;
    transition: all 0.2s;

    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }

  .menu-logo {
    position: relative;
    flex-basis: 100%;
    background: ${props => props.theme.colors.primary};
    margin: 1em 10em 1em 0;
    max-width: 50px;
    max-height: 50px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <section>
          <img
            className="menu-logo"
            src="//images.ctfassets.net/56hdjtk8xz2m/4BwVsTXJY8yVAsLI6j31KL/ae91801cf6087633921f2a622e422fe3/menu_logo.png"
            alt="Powered by Contentful"
          />

          {menuLinks.map(link => (
            <div key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </div>
          ))}
        </section>
      </Nav>
    </Header>
  )
}

export default Menu
