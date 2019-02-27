import React from 'react';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.css';
import useApi from './hooks/useApi';

const App = props => {
  const [friends, friendsApi] = useApi('http://localhost:5000/friends');

  const handleFormSubmit = friendData => {
    friendsApi.create(friendData);
  };

  const handleRemoveFriend = friendId => {
    friendsApi.delete(friendId);
  };

  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList data={friends} onRemove={handleRemoveFriend} />
      <FriendForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
