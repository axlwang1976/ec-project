import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import styles from './CategoryList.module.scss';

function CategoryList({ items }) {
  return (
    <div className={styles.directoryMenu}>
      {items.map(item => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ category }) => ({
  items: category.categoryData,
});

CategoryList.propTypes = {
  items: PropTypes.array,
};

export default connect(mapStateToProps)(CategoryList);
