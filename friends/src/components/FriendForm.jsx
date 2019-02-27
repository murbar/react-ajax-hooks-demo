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

const HiddenInput = ({ name, value }) => {
  return <input type="hidden" name={name} value={value} />;
};

const FriendForm = ({ onSubmit, editing = null }) => {
  const { values, handleChange, handleSubmit, handleClear } = useForm(addFriend);

  function addFriend() {
    onSubmit(values);
  }

  return (
    <div className="friends-list">
      <form onSubmit={handleSubmit}>
        <HiddenInput name="id" value={values.id} />
        <Input name="name" label="Name" onChange={handleChange} value={values.name || ''} />
        <Input name="age" label="Age" onChange={handleChange} value={values.age || ''} />
        <Input
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={values.email || ''}
        />
        <button type="submit">Add Friend</button>
        <button type="reset" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
