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
      {data.name}, age {data.age} - {data.email}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Friend;
