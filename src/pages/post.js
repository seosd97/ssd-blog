import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import _ from 'underscore';
import TagContainer from '../components/tagContainer';
import Utterances from '../components/utterances';

const Post = ({ data, location }) => {
  const { html, frontmatter } = data.markdownRemark;
  console.log(location);
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section id="post-root" className="pd-root content-wrapper-l mg-auto flex f-col flex-a-c">
        <div id="post-header" className="flex f-col flex-j-c flex-a-c w-100">
          <h1>{frontmatter.title}</h1>
          <div className="header-content">{frontmatter.date}</div>
          <div className="header-content fw-b">{frontmatter.author}</div>
          <TagContainer tags={frontmatter.tags} />
        </div>
        <div id="post-content" className="w-100" dangerouslySetInnerHTML={{ __html: html }}></div>
        <div id="post-comment-container">
          <Utterances />
        </div>
      </section>
    </Layout>
  );
};

Post.propTypes = {
  data: propTypes.object,
  location: propTypes.object,
};

export const postQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        author
        tags
      }
    }
  }
`;

export default Post;
