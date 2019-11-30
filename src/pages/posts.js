import React from "react";
import { Layout } from '../containers/layout';
import { graphql } from "gatsby"
import {PostLink} from "../components/post-link";

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    return (
        <Layout>
            {edges.map(post => <PostLink key={post.node.id} post={post.node}/>)}
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