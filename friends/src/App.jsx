import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

const App = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log('mounted and loading data');
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList data={friends} />
      <AddFriendForm />
    </div>
  );
};

export default App;
