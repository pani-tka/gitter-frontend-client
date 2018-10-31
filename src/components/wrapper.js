import React from 'react';
import styles from './wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default Wrapper;
