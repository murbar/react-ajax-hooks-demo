import { useState, useEffect } from 'react';

const useForm = (onSubmit, initialValues) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (initialValues) setValues({ ...initialValues });
  }, [initialValues]);

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
