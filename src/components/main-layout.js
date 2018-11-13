import React from 'react';
import UserCard from './user-card';
import RoomList from './room-list';
import styles from './main-layout.module.scss';
import RoomView from './room-view';

const MainLayout = ({ user, rooms, messages, messagesLoading, selectedRoom, selectRoom, loadMessages }) => (
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
          loadMessages={loadMessages}
        />
      </div>
      <div className={styles.roomView}>
        <RoomView
          selectedRoom={selectedRoom}
          messages={messages}
          messagesLoading={messagesLoading}
          user={user}
        />
      </div>
    </div>
  </div>
);

export default MainLayout;
