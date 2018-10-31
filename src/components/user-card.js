import React, { Component } from 'react';

export const EmptyUserCard = () => (
  <div class="empty-user-card">
    Empty User Card
  </div>
);

const UserCard = ({ user }) => (
  <div className="user-card">
    {user[0].displayName}
  </div>
);

export default UserCard;
