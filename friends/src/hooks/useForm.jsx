import { useState } from 'react';

const useForm = onSubmit => {
  const [values, setValues] = useState({});

  const handleChange = e => {
    e.persist();
    const { name, value } = e.target;
    setValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    onSubmit();
    setValues({});
  };

  const handleClear = () => {
    setValues({});
  };

  return { values, handleChange, handleSubmit, handleClear };
};

export default useForm;
