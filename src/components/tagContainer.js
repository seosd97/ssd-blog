import React from 'react';
import propTypes from 'prop-types';
import _ from 'underscore';
import Tag from './tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const TagContainer = ({ tags }) => {
  return (
    <React.Fragment>
      {!_.isEmpty(tags) ? (
        <div className="flex flex-a-c" style={{ margin: '10px 0 3px 0' }}>
          <FontAwesomeIcon icon={faTags} size="xs" style={{ marginRight: '7px' }} />
          {tags.map((t, i) => {
            return <Tag key={i} desc={t} />;
          })}
        </div>
      ) : null}
    </React.Fragment>
  );
};

TagContainer.propTypes = {
  tags: propTypes.array,
};

TagContainer.defaulProps = {
  tags: [],
};

export default TagContainer;
