import React from 'react';

const Friend = ({ data, onUpdate, onRemove }) => {
  const handleUpdate = () => {
    onUpdate(data.id);
  };

  const handleRemove = () => {
    onRemove(data.id);
  };

  return (
    <div className="friends-list-item">
      <div className="name">
        <span>{data.name}</span>, age {data.age}
      </div>
      <div className="email">{data.email}</div>
      <div className="controls">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default Friend;
