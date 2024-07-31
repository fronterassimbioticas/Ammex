// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: false, // Disable source maps
    });
  };
  