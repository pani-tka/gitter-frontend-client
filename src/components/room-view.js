import React, {Component}from 'react';
import styles from './room-view.module.scss';

class RoomView extends Component {
  render() {
    const { selectedRoom } = this.props;

    console.log('RoomView props', this.props);

    if (selectedRoom) {
      return (
        <div className={styles.container}>
          <img className={styles.image} src={selectedRoom.avatarUrl} alt=""/>
          <a className={styles.name}  href="#" > {selectedRoom.name} </a>
        </div>
      );
    }

    return <p>Please select a room to start messaging</p>
  }
}

export default RoomView;