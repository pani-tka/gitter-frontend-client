import React from 'react';
import styles from './room-fetch-button.module.scss';

const RoomFetchButton = ({ fetching, error, action }) => (
  <button
    className={styles.container}
    disabled={fetching} 
    onClick={action}
  >
    {fetching && 'Fetching...'} 
    {!fetching && (error ? 'Retry' : 'Fetch rooms')}
  </button>
);

export default RoomFetchButton;
