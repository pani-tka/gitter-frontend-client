import React from 'react';
import styles from './user-fetch-button.module.scss';

const UserFetchButton = ({ fetching, error, action }) => (
  <button
    className={styles.container}
    disabled={fetching} 
    onClick={action}
  >
    {fetching && 'Fetching...'} 
    {!fetching && (error ? 'Retry' : 'Fetch user')}
  </button>
);

export default UserFetchButton;
