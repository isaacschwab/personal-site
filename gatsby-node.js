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
// exports.onCreateNode = ({ node, actions }) => {
//   // destructures the needed action
//   const { createNodeField } = actions
//   //
//   // checks the gatsby node type
//   // in this case we are looking for the json content that exists and transformed by the gatsby-transformer-json plugin
//   console.log(node.internal.type)
//   if (node.internal.type === "HobbiesJson") {
//     // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
//     createNodeField({
//       node, // the current node
//       name: `hobbyImage`, // defines a name for the new element being added.
//       value: `../images/hobbies/${node.image.src}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
//     })
//   }

// }

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
