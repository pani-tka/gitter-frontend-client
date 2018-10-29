import React from 'react';
import RoomItem from './room-item';

const RoomList = ({ list }) => (
  <div className="room-list">
    <h2> You have visited {list.length} rooms</h2>
    {list.map(item => (
      <RoomItem
        key={item.id}
        {...item}
      />
    ))}
  </div>
);


export const EmptyRoomList = () => (
  <div className="empty-room-list">
    No Rooms, no blooms
  </div>
);

export default RoomList;
