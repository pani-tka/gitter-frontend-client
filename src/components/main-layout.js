import React from 'react';
import UserCard from './user-card';
import RoomList from './room-list';
import styles from './main-layout.module.scss';

const MainLayout = ({ user, rooms }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <UserCard user={user} />
    </header>
    <div className={styles.mainContent}>
      <div className={styles.roomList}>
        <RoomList rooms={rooms} />
      </div>
      <div className={styles.roomView}>
        RoomView
      </div>
    </div>
  </div>
);

export default MainLayout;
