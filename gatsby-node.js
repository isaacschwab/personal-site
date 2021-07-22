/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * gatsby internal api hook that will be triggered after each node is created
 * @param {Object} node is the internal gatsby node "object" that will be available in the data layer i.e graphQL layer
 * @param {Object} actions contains the set of options available.
 */

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query Projects {
      allProjectsJson {
        nodes {
          id
          slug
          type
        }
      }
    }
  `)
  data.allProjectsJson.nodes.forEach(node => {
    const slug = node.slug
    if(node.type == "work") {
      actions.createPage({
        path: `/work/${slug}`,
        component: require.resolve(`./src/templates/project-detail-template.js`),
        context: { id: node.id },
      })
    } 
    else {
      actions.createPage({
        path: `/projects/${slug}`,
        component: require.resolve(`./src/templates/project-detail-template.js`),
        context: { id: node.id },
      })
    }
  })
}
