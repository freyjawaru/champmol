import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;
  const { Items, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const ItemItem = Items.find((Item) => Item.id === Number(id));
      setFormData({
        name: ItemItem.name
      });
    }
    if (Items.length) {
      prefillFormData();
    }
  }, [Items, id])

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