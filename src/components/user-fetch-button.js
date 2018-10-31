import React from 'react';

const UserFetchButton = ({ fetching, error, action }) => (
  <button
    className="user-fetch-button"
    disabled={fetching} 
    onClick={action}
  >
    {fetching && 'Fetching...'} 
    {!fetching && (error ? 'Retry' : 'Fetch user')}
  </button>
);

export default UserFetchButton;
