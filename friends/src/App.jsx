import React, { useState, useEffect } from 'react';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';
import useApi from './hooks/useApi';

const App = props => {
  const [friends, friendsApi] = useApi('http://localhost:5000/friends');

  const handleAddFriend = friendData => {
    friendsApi.create(friendData);
  };

  const handleRemoveFriend = friendId => {
    friendsApi.delete(friendId);
  };

  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList data={friends} onRemove={handleRemoveFriend} />
      <AddFriendForm onSubmit={handleAddFriend} />
    </div>
  );
};

export default App;
