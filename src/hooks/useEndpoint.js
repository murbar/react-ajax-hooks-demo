import { useState, useEffect } from 'react';
import axios from 'axios';

const useEndpoint = endpoint => {
  const [data, setData] = useState([]);

  useEffect(() => getItems(), []);

  const getItems = () => {
    axios
      .get(endpoint)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const createItem = itemData => {
    axios
      .post(endpoint, itemData)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const updateItem = itemData => {
    axios
      .put(`${endpoint}/${itemData.id}`, itemData)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const deleteItem = itemId => {
    axios
      .delete(`${endpoint}/${itemId}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const api = {
    get: getItems,
    create: createItem,
    update: updateItem,
    delete: deleteItem
  };

  return [data, api];
};

export default useEndpoint;
