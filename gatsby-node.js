/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    const query = await graphql(`
      query {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    const postComponent = path.resolve('./src/pages/post.js');

    const posts = query.data.allMarkdownRemark.edges;
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postComponent,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
