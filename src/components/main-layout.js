import React from 'react';
import styles from './main-layout.module.scss';

const MainLayout = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      Header
    </header>
    <div className={styles.mainContent}>
      <div className={styles.roomList}>
        Room List
      </div>
      <div className={styles.roomView}>
        Room View
      </div>
    </div>
  </div>
);

export default MainLayout;
