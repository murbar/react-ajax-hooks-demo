import React, { useState, useEffect } from 'react';
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

const FriendForm = ({ onSubmit, initialValues }) => {
  const initialFormTitle = 'Add Friend';
  const [formTitle, setFormTitle] = useState(initialFormTitle);
  const submitButtontext = formTitle.includes('Add') ? 'Add' : 'Edit';

  useEffect(() => {
    const title = initialValues ? `Edit ${initialValues.name}` : 'Add Friend';
    setFormTitle(title);
  }, [initialValues]);

  const addFriend = () => {
    onSubmit(values);
    resetForm();
  };
  const { values, handleChange, handleSubmit, handleClear } = useForm(addFriend, initialValues);

  const resetForm = () => {
    handleClear();
    setFormTitle(initialFormTitle);
  };

  return (
    <div className="friends-form">
      <form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <HiddenInput name="id" value={values.id || ''} />
        <Input name="name" label="Name" onChange={handleChange} value={values.name || ''} />
        <Input name="age" label="Age" onChange={handleChange} value={values.age || ''} />
        <Input
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={values.email || ''}
        />
        <button type="submit">{submitButtontext} Friend</button>
        <button type="reset" onClick={resetForm}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
