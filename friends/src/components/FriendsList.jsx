import React from 'react';

const FriendsList = ({ data }) => {
  if (!data.length) return <div>Loading...</div>;
  return (
    <div>
      list
      <ul />
    </div>
  );
};

export default FriendsList;
