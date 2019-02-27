import React from 'react';

const FriendsList = ({ data, onRemove }) => {
  if (!data.length) return <div>Loading...</div>;
  return (
    <div className="friends-list">
      {data.map(f => (
        <div key={f.id} className="friends-list-item">
          {f.name}, age {f.age} - {f.email}
          <button onClick={() => onRemove(f.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
