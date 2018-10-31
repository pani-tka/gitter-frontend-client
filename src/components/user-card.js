import React, { Component } from 'react';
import styles from './user-card.module.scss';

export const EmptyUserCard = () => (
  <div class={styles.emptyContainer}>
    Empty User Card
  </div>
);

const UserCard = ({ user }) => (
  <div className={styles.container}>
    {user[0].displayName}
  </div>
);

export default UserCard;
