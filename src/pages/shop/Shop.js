import React, { Component } from 'react';
import CollectionList from '../../components/collection/CollectionList';
import shoppingData from '../../shoppingData';
import styles from './Shop.module.scss';

export default class Shop extends Component {
  state = { collections: shoppingData };

  render() {
    const { collections } = this.state;
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
}
