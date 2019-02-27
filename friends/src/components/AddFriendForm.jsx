import React from 'react';
import useForm from '../hooks/useForm';

const Input = ({ name, label, value, onChange, type = 'text' }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={name} name={name} onChange={onChange} value={value} />
    </div>
  );
};

const AddFriendForm = ({ onSubmit }) => {
  const fields = ['name', 'age', 'email'];
  const { values, handleChange, handleSubmit } = useForm(fields, addFriend);

  function addFriend() {
    onSubmit(values);
  }

  return (
    <div className="friends-list">
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Name" onChange={handleChange} value={values.name} />
        <Input name="age" label="Age" onChange={handleChange} value={values.age} />
        <Input
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
