import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import styles from './CollectionList.module.scss';

export default function CollectionList({ title, items }) {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
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
};
