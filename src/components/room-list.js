import React from 'react';
import RoomItem from './room-item';
import { connect } from 'react-redux';
import {selectRoom} from '../actions.js';
import styles from './room-list.module.scss';

export const EmptyRoomList = () => (
  <div className="empty-room-list">
    No Rooms, no blooms
  </div>
);

const RoomList = ({ rooms,  selectedRoomID ,  messagesLoading }) => (
  <div className={styles.container}>
    {!!rooms && (
      <h2> You have visited {rooms.length} rooms</h2>
    )}
    <input className={styles.searchInput} type="text" placeholder="Search"/>
    <div className={styles.list}>
    {!!rooms && rooms.map(item => (
      <RoomItem
        key={item.id}
        selectedRoom={!!rooms &&rooms.find(item => item.id === selectedRoomID)}
        isSelected={selectedRoomID && item.id === selectedRoomID}
        selectRoom={selectRoom}
        messagesLoading={messagesLoading}
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
    selectRoom: state.selectRoom,
  };
}

export default connect(mapStateToProps)(RoomList);
