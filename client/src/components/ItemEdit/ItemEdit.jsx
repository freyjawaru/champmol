import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemEdit(props) {
  const [formData, setFormData] = useState({
    title: ''
  });
  const { title } = formData;
  const { items, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const itemItem = items.find((item) => item.id === Number(id));
      setFormData({
        title: itemItem.title
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
      <label>title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}