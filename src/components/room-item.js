import React, { Component } from 'react';
import styles from './room-item.module.scss';

class RoomItem extends Component {
  handleClick = event => {
    event.preventDefault();

    const { id, isSelected, selectRoom } = this.props;

    if (!isSelected) {
      // if already selected we should'nt select again
      selectRoom(id);
    }
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
        <a className={styles.name} href="#" onClick={this.handleClick}>
          {name}
        </a>
        <span className={styles.unreadItem}>
          {unreadItems}
        </span>
     </div>
    );
  }
}


export default RoomItem;
