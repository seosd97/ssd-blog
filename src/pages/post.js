import React from 'react';
import propTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div>{frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

Post.propTypes = {
  data: propTypes.object,
};

export const postQuery = graphql`
  query($path: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMM DD YYYY")
        author
      }
    }
  }
`;

export default Post;
