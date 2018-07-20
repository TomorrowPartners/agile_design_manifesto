import React from 'react'
import PostLink from "../components/post-link";

import Intro from "../components/intro";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <PostLink color={edge.node.frontmatter.color} key={edge.node.id} post={edge.node} />);

  return <div>
    <Intro/>

    <div>{Posts}</div>

  </div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [id],order: ASC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            color
          }
          html
        }
      }
    }
  }
`;
