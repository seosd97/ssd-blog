import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

const Tag = ({ desc }) => {
  return <Link to="/" className="tag">{`# ${desc}`}</Link>;
};

Tag.propTypes = {
  desc: propTypes.string,
};

Tag.defaultProps = {
  desc: '',
};

export default Tag;
