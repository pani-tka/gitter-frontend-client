import React from 'react';
import styles from './room-item.module.scss';

class RoomItem extends React.Component {

  handleClick = e => e.preventDefault();
  
  render() {
    const { name,
      unreadItems,
      avatarUrl } = this.props;
    
    return (
      <div className={styles.container}>
        <img className={styles.image} src={avatarUrl} alt=""/>
        <a className={styles.name}  href="#" onClick={this.handleClick}> {name} </a>
        <span className={styles.unreadItem}>{unreadItems}</span>
     </div>
    );
  }
}


export default RoomItem;
