import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingDataForCollection } from '../../redux/selectors/shopSelectors';
import CollectionItem from '../../components/collection/CollectionItem';
import Spinner from '../../components/spinner/Spinner';
import styles from './Collection.module.scss';

function Collection({ match, items }) {
  if (items) {
    const findCollection = title => items[title];
    const selectCollection = findCollection(match.params.title);

    return (
      <div className={styles.collectionPage}>
        <h2 className={styles.title}>{selectCollection.title.toUpperCase()}</h2>
        <div className={styles.items}>
          {selectCollection.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
  return <Spinner />;
}

const mapStateToProps = createStructuredSelector({
  items: selectShoppingDataForCollection,
});

Collection.propTypes = {
  items: PropTypes.object,
  match: PropTypes.object,
};

export default connect(mapStateToProps)(Collection);
