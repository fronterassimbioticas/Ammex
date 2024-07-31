const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ammexservices.com",
    title: "ammex",
  },
  pathPrefix: ``,
  plugins: [
    "gatsby-plugin-sass",
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },*/
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links"
  ],
};
