import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import categoryData from '../../categoryData';
import styles from './CategoryList.module.scss';

export default class CategoryList extends Component {
  state = { items: categoryData };

  render() {
    const { items } = this.state;

    return (
      <div className={styles.directoryMenu}>
        {items.map(item => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
