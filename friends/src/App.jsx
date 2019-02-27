import React, { useState } from 'react';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.css';
import useApi from './hooks/useApi';

const App = props => {
  const [friends, friendsApi] = useApi('http://localhost:5000/friends');
  const [editingData, setEditingData] = useState(null);

  const handleFormSubmit = friendData => {
    if (!friendData.id) {
      friendsApi.create(friendData);
    } else {
      friendsApi.update(friendData);
    }
  };

  const handleRemoveFriend = friendId => {
    friendsApi.delete(friendId);
  };

  const populateFormForEditing = friendId => {
    setEditingData(friends.find(f => f.id === friendId));
  };

  return (
    <div className="App">
      <h1>Friends</h1>
      <FriendsList
        data={friends}
        onUpdate={id => populateFormForEditing(id)}
        onRemove={handleRemoveFriend}
      />
      <FriendForm onSubmit={handleFormSubmit} initialValues={editingData} />
    </div>
  );
};

export default App;
