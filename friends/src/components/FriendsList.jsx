import React from 'react';

const FriendsList = ({ data }) => {
  if (!data.length) return <div>Loading...</div>;
  return (
    <div className="friends-list">
      {data.map(f => (
        <div key={f.id} className="friends-list-item">
          {f.name}, age {f.age} - {f.email}
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
