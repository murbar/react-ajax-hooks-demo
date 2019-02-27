import React from 'react';
import Friend from './Friend';

const FriendsList = ({ data, onRemove }) => {
  if (!data.length) return <div>Loading...</div>;
  return (
    <div className="friends-list">
      {data.map(f => (
        <Friend data={f} onRemove={onRemove} key={f.id} />
      ))}
    </div>
  );
};

export default FriendsList;
