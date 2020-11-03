import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex">
        <Profile />
        <section className="pd-root flex-g-3">
          <h2 className="d-block mg-0 txt-a-r fs-st fw-n">0 posts</h2>
        </section>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
