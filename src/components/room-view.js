import React, {Component} from 'react';
import styles from './room-view.module.scss';
import MessageItem from './message-item';
import { connect } from 'react-redux';

class RoomView extends Component {

  messageListRef = React.createRef();

  scrollToBottom = () => {
    const messagesContainer = this.messageListRef.current;
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.messages !== this.props.messages) {
      this.scrollToBottom();
    }
  }

  render() {
    const {
      user,
      messages,
      messagesLoading,
      selectedRoom,
    } = this.props;

    if (!!messages) {

      if (messagesLoading) {
        return <div></div>;
      }

      return (
        <div className={styles.container}>
          <div className={styles.roomTitle}>
            <img className={styles.image} src={selectedRoom.avatarUrl} alt=""/>
            <a className={styles.name}  href="#" >{selectedRoom.name} </a>
          </div>
          <div ref={this.messageListRef} className={styles.messageList} >
            {!!messages && messages.map(item => (
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
    messagesLoading: state.messagesLoading,
    selectedRoom: !!state.rooms && state.rooms.find(item => item.id === state.selectedRoomID),
  };
}

export default connect(mapStateToProps)(RoomView);