import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../redux/selectors/shopSelectors';
import CollectionList from '../../components/collection/CollectionList';
import styles from './Shop.module.scss';

function Shop({ collections }) {
  return (
    <div className={styles.shopPage}>
      {collections.map(collection => (
        <CollectionList
          title={collection.title}
          key={collection.id}
          items={collection.items}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShoppingData,
});

Shop.propTypes = {
  collections: PropTypes.array,
};

export default connect(mapStateToProps)(Shop);
