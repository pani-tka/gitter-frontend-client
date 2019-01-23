import React, { Component } from 'react';
import { DateTime } from 'luxon';
import styles from './message-item.module.scss';

class MessageItem extends Component {
  handleClick = () => {
    // do nothing
  };

  render() {
    const { text, fromUser, sent } = this.props;

    const sentTime = DateTime.fromISO(sent)
      .setLocale('en')
      .toFormat('LL LLL, t');

    return (
      <div className={styles.container}>
        <img className={styles.avatar} src={fromUser.avatarUrl} alt="" />
        <button
          type="button"
          className={styles.username}
          onClick={this.handleClick}
        >
          {fromUser.displayName}
        </button>
        <span className={styles.time}>{sentTime}</span>
        <span className={styles.text}>{text}</span>
      </div>
    );
  }
}

export default MessageItem;
