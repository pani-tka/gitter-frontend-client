import React from 'react';
import RoomItem from './room-item';
import { connect } from 'react-redux';
import styles from './room-list.module.scss';

export const EmptyRoomList = () => (
  <div className="empty-room-list">
    No Rooms, no blooms
  </div>
);

const RoomList = ({ rooms, roomsLoading, selectRoom, selectedRoom, loadMessages }) => (
  <div className={styles.container}>
    {!!rooms && (
      <h2> You have visited {rooms.length} rooms</h2>
    )}
    <input className={styles.searchInput} type="text" placeholder="Search"/>
    <div className={styles.list}>
    {!!rooms && rooms.map(item => (
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


const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    roomsLoading: state.roomsLoading,
  };
}

export default connect(mapStateToProps)(RoomList);
