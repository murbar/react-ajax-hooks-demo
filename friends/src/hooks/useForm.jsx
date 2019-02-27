import { useState } from 'react';

const useForm = (fieldNames = [], onSubmit) => {
  const initialState = fieldNames.reduce((obj, field) => {
    obj[field] = '';
    return obj;
  }, {});
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    e.persist();
    const { name, value } = e.target;
    setValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    onSubmit();
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm;
