import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

const App = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleAddFriend = friendData => {
    console.log(friendData);
  };

  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList data={friends} />
      <AddFriendForm onSubmit={handleAddFriend} />
    </div>
  );
};

export default App;
