import React from 'react';

const Friend = ({ data, onRemove }) => {
  const handleRemove = () => {
    onRemove(data.id);
  };

  return (
    <button className="friends-list-item">
      {data.name}, age {data.age} - {data.email}
      <button onClick={handleRemove}>X</button>
    </button>
  );
};

export default Friend;
