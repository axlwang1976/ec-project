import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import styles from './CollectionList.module.scss';

function CollectionList({ title, items, match }) {
  return (
    <div className={styles.collectionPreview}>
      <Link to={`${match.url}/${title.toLowerCase()}`} className={styles.title}>
        {title.toUpperCase()}
      </Link>
      <div className={styles.preview}>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

CollectionList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  match: PropTypes.object,
};

export default withRouter(CollectionList);
