/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Angeles Lations",
    description: "A super-fast site using GatsbyJS",
    author: "Morgan Baker",
    twitterUsername: "barcadia",
    facebookUsername: "barcadia",
    instagramUsername: "barcadia",
    linkedinUsername: "barcadia",
    image: "/macbook-color.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "Morgan Baker Development",
    developerUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '1i1bkb03pk13',
        accessToken: 'RPnhib_E809zCDriBUZn_i80svXXHMkM2SJOoegDSm0',
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
