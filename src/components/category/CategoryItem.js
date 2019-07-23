import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const handleClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div
      className={`${styles.menuItem} ${size && styles.large}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex="0"
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  linkUrl: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(CategoryItem);
