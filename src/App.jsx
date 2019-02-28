import React, { useState } from 'react';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.css';
import useEndpoint from './hooks/useEndpoint';

const App = props => {
  const [friends, friendsApi] = useEndpoint('/.netlify/functions/friends');
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
    <main>
      <h1>Friends</h1>
      <p>
        A CRUDdy React demo by Joel Bartlett. <br />
        See my <a href="https://github.com/murbar">code on GitHub</a>.
      </p>
      <FriendsList
        data={friends}
        onUpdate={id => populateFormForEditing(id)}
        onRemove={handleRemoveFriend}
      />
      <FriendForm onSubmit={handleFormSubmit} initialValues={editingData} />
    </main>
  );
};

export default App;
