import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section id="post-root" className="pd-root max-w-content mg-auto flex f-col flex-a-c">
        <div id="post-header" className="flex f-col flex-j-c flex-a-c">
          <h1>{frontmatter.title}</h1>
          <div className="posting-date">{frontmatter.date}</div>
          <div className="post-author fw-b">{frontmatter.author}</div>
        </div>
        <div id="post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      </section>
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
        date(formatString: "MMM DD, YYYY")
        author
      }
    }
  }
`;

export default Post;
