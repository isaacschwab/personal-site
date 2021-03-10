import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import ImgDesc from '../components/img-desc'
  
const Hobbies = ({ data }) => {
  const { hobbies } = data
  return (
    <Layout>
      <SEO title="Hobbies - Isaac Schwab" />
      <h1>Hobbies</h1>
      <p>
        A lot of my interests involve being outside and enjoying nature. Living in Minnesota,
        I get to enjoy all the seasons. My hobbies change as the seasons change, but in almost
        every season you will find me on skis.
      </p>
      <section className={`component`}>
        {hobbies.edges.map(item => {
          return (
            <ImgDesc
              key={item.node.id}
              title={item.node.title}
              description={item.node.description}
              image={item.node.image}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    hobbies: allHobbiesJson {
      edges {
        node {
          id
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1000, quality: 90)
              }
            }
          }
        }
      }
    }
  }
`

export default Hobbies
