import React from 'react';
import propTypes from 'prop-types';
import '../styles/post.scss';
import { Link } from 'gatsby';

const PostElement = ({ data }) => {
  return (
    <article className="post-element card-element">
      <Link to={`${data.fields.slug}`}>
        <h2>{data.frontmatter.title}</h2>
        <p>{data.excerpt}</p>
        <div className="post-description">
          by <strong>{data.frontmatter.author}</strong> at{' '}
          <strong>{data.frontmatter.date}</strong>
        </div>
      </Link>
    </article>
  );
};

PostElement.propTypes = {
  data: propTypes.object,
};

export default PostElement;
