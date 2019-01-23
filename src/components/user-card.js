import React from 'react';
import { connect } from 'react-redux';
import styles from './user-card.module.scss';

export const EmptyUserCard = () => (
  <div className={styles.emptyContainer}>Empty User Card</div>
);

const UserCard = ({ user }) => (
  <div className={styles.container}>{user.displayName}</div>
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserCard);
