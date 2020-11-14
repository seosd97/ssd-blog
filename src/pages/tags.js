import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Tag from '../components/tag';

const Tags = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout>
      <SEO title="tags" />
      <div className="content-wrapper-l mg-auto flex f-col flex-j-c">
        <section>
          <h2>{`${tags.length} Tags`}</h2>
          <div className="flex f-wrap">
            {tags.map((t, i) => {
              return <Tag key={i} desc={t.fieldValue} />;
            })}
          </div>
        </section>
        {/* {tags.map((t, i) => {
          return (
            <section key={i}>
              <h2>{`# ${t.fieldValue}`}</h2>
              
            </section>
          );
        })} */}
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  data: propTypes.object,
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
