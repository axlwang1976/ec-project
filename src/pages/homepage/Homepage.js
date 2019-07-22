import React from 'react';
import CategoryList from '../../components/category/CategoryList';
import styles from './Homepage.module.scss';

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <CategoryList />
    </div>
  );
}
