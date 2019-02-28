import React from 'react';
import Friend from './Friend';

const FriendsList = ({ data, onRemove, onUpdate }) => {
  if (!data.length) return <div>Loading...</div>;
  return (
    <div className="friends-list">
      {data.map(f => (
        <Friend data={f} onRemove={onRemove} onUpdate={onUpdate} key={f.id} />
      ))}
    </div>
  );
};

export default FriendsList;
