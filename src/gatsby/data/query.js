module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          slug
          publishDate
        }
      }
    }
  }`,
  animals: `{
  allContentfulAnimal {
    edges {
      node {
        id
        title
        adopted
        age
        breed
        contentful_id
        description {
          id
          content {
            content {
              value
            }
          }
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
  }
}
`,
  pages: `{
    allContentfulPage {
      edges {
        node {
          slug
        }
      }
    }
  }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          slug
          post {
            id
          }
        }
      }
    }
  }`,
}
