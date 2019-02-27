import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

const apiEndpoint = 'http://localhost:5000/friends';

const App = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleAddFriend = friendData => {
    axios
      .post(apiEndpoint, { ...friendData })
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleRemoveFriend = friendId => {
    axios
      .delete(`${apiEndpoint}/${friendId}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
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
