import React from 'react';
import styles from './room-item.module.scss';

class RoomItem extends React.Component {
  handleClick = e => e.preventDefault();
  
  
  render() {
    const { name } = this.props;
    
    return (
     <a className={styles.container} href="#" onClick={this.handleClick}>
        {name}
      </a>
    );
  }
}


export default RoomItem;
