import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostLink from '../components/post-link';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const PostData = data.allMarkdownRemark.edges.map(({ node: post }) => (
    <PostLink key={post.id} post={post} />
  ));

  return <div>{PostData}</div>;
};

export default IndexPage;
