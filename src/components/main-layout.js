import React from 'react';
import UserCard from './user-card';
import RoomList from './room-list';
import styles from './main-layout.module.scss';

const MainLayout = ({ user, rooms, selectedRoom, selectRoom }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <UserCard user={user} />
    </header>
    <div className={styles.mainContent}>
      <div className={styles.roomList}>
        <RoomList 
          rooms={rooms}
          selectedRoom={selectedRoom}
          selectRoom={selectRoom}
        />
      </div>
      <div className={styles.roomView}>
        <p>Please select a room to start messaging</p>
      </div>
    </div>
  </div>
);

export default MainLayout;
