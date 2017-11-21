const path = require('path');
const util = require('util');
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './app_modules'),
        src: path.resolve(__dirname, './src')
      }
    }
  });

  return config;
};

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const sourceName = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: sourceName });
    createNodeField({
      node,
      name: `slug`,
      value: `/${sourceName}${slug}`
    });
    createNodeField({
      node,
      name: `sourceName`,
      value: sourceName
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                sourceName
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        console.log(node.fields);
        createPage({
          path: node.fields.slug,
          component:
            node.fields.sourceName == 'noutati'
              ? path.resolve(`./src/templates/noutati.js`)
              : path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
