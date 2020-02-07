import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/"
import SEO from "../components/seo"
  
const Hobbies = ({ data }) => {
  const { hobbies } = data
  console.log(data)
  return (
    <Layout>
      <SEO title="Hobbies - Isaac Schwab" />
      <h1>Hobbies</h1>
      <p>A lot of my interests involve being outside and enjoying nature. Living in Minnesota,
        I get to enjoy all the seasons. My hobbies change as the seasons change, but in almost
        every season you will find me on skis.
      </p>
      <div>
        {hobbies.edges.map(item => {
          return (
            <div key={item.node.id}>
              <h4>{item.node.title}</h4>
              <h5>{item.node.description}</h5>
              <Img
                fluid={item.node.image.src.childImageSharp.fluid}
                alt={item.node.image.alt}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
// page query with the updated fields that were created in gatsby-node.js making the query more streamlined.
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
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Hobbies
