import React from 'react';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer} />
    </div>
  );
}
