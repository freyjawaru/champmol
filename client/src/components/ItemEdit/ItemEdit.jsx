import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;
  const { items, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const itemItem = items.find((item) => item.id === Number(id));
      setFormData({
        name: itemItem.name
      });
    }
    if (items.length) {
      prefillFormData();
    }
  }, [items, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Item</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}