import React from 'react';
import RoomItem from './room-item';
import styles from './room-list.module.scss';

const RoomList = ({ rooms, selectRoom, selectedRoom, loadMessages }) => (
  <div className={styles.container}>
    <h2> You have visited {rooms.length} rooms</h2>
    <input className={styles.searchInput} type="text" placeholder="Search"/>
    <div className={styles.list}>
    {rooms.map(item => (
      <RoomItem
        key={item.id}
        isSelected={selectedRoom && item.id === selectedRoom.id}
        selectRoom={selectRoom}
        loadMessages={loadMessages}
        {...item}
      />
    ))}
    </div>
  </div>
);

export const EmptyRoomList = () => (
  <div className="empty-room-list">
    No Rooms, no blooms
  </div>
);

export default RoomList;
