import React, {Component} from 'react';
import styles from './room-item.module.scss';
import { connect } from 'react-redux';
import {selectRoom,fetchMessages} from '../actions.js';

class RoomItem extends Component {

  handleClick = event => {
    event.preventDefault();
      this.props.selectRoom(this.props.id);
      this.props.fetchMessages(this.props.id);
  }

  render() {
    const {
      name,
      unreadItems,
      avatarUrl,
      isSelected,
    } = this.props;

    const containerClassName = isSelected
    ? `${styles.container} ${styles.selected}`
    : styles.container;

    return (
      <div className={containerClassName}>
        <img className={styles.image} src={avatarUrl} alt=""/>
        <a className={styles.name}  href="#" onClick={this.handleClick}> {name} </a>
        <span className={styles.unreadItem}>{unreadItems}</span>
     </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  selectRoom,
  fetchMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomItem);