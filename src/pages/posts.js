import React from "react";
import Layout from '../containers/Layout';
import { graphql } from "gatsby"

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    return (
        <Layout>
        </Layout>
    );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            description
          }
        }
      }
    }
  }
`