import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';
import { graphql } from 'gatsby';
import PostElement from '../components/post-element';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-j-c mg-t-50">
        <Profile />
        <section className="pd-root max-w-content">
          <h2 className="d-block mg-0 fs-st fw-n" style={{ paddingLeft: '1.562rem' }}>
            lastest posts
          </h2>
          <div className="card-container flex f-col flex-j-c">
            {edges.map((e, i) => {
              return <PostElement key={i} data={e.node} />;
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
