import React from 'react';

const Friend = ({ data, onRemove }) => {
  const handleRemove = () => {
    onRemove(data.id);
  };

  return (
    <div className="friends-list-item">
      {data.name}, age {data.age} - {data.email}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Friend;
