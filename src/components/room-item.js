import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './room-item.module.scss';
import { selectRoom, fetchMessages } from '../actions';

class RoomItem extends Component {
  handleClick = () => {
    this.props.selectRoom(this.props.id);
    this.props.fetchMessages(this.props.id);
  };

  render() {
    const { name, unreadItems, avatarUrl, isSelected } = this.props;

    const containerClassName = isSelected
      ? `${styles.container} ${styles.selected}`
      : styles.container;

    return (
      <div className={containerClassName}>
        <img className={styles.image} src={avatarUrl} alt="" />
        <button
          type="button"
          className={styles.name}
          onClick={this.handleClick}
        >
          &nbsp;{name}&nbsp;
        </button>
        <span className={styles.unreadItem}>{unreadItems}</span>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  selectRoom,
  fetchMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomItem);
