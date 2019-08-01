import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../redux/selectors/shopSelectors';
import CollectionList from '../../components/collection/CollectionList';
import Spinner from '../../components/spinner/Spinner';
import styles from './Shop.module.scss';

function Shop({ collections }) {
  if (collections.length) {
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
  return <Spinner />;
}

const mapStateToProps = createStructuredSelector({
  collections: selectShoppingData,
});

Shop.propTypes = {
  collections: PropTypes.array,
};

export default connect(mapStateToProps)(Shop);
