import React from 'react'
import Principle from "../components/principle";
import Intro from "../components/intro";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .map((edge, index) => <Principle color={edge.node.frontmatter.color} key={edge.node.id} edge={edge} index={index+1} post={edge.node} />);

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
            color
          }
          html
        }
      }
    }
  }
`;
