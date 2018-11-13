import React, {Component}from 'react';
import styles from './room-view.module.scss';
import MessageItem from './message-item';

class RoomView extends Component {

  render() {
    const {
      user,
      messages,
      messagesLoading,
      selectedRoom,
    } = this.props;


    if (selectedRoom) {

      if (messagesLoading) {
        return <div></div>;
      }

      // we don't need it
      //if (!messages) {
      //  return false;
      //}

      return (
        <div className={styles.container}>
        <div className={styles.roomTitle}>
          <img className={styles.image} src={selectedRoom.avatarUrl} alt=""/>
          <a className={styles.name}  href="#" >{selectedRoom.name} </a>
          </div>
          <div className={styles.messageList}>
          {messages.map(item => (
          <MessageItem
            key={item.id}
            {...item}
          />
          ))}
          </div>
          <div className={styles.sendForm}>
          <img className={styles.image} src={user.avatarUrl} alt=""/>
          <input className={styles.messageInput}
            type="text"
            placeholder="Click here to type a chat message."
            />
          </div>
        </div>
      );
    }

    return <p>Please select a room to start messaging</p>

  }
}

export default RoomView;