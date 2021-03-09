import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { postItem } from '../../services/items'

export default function ItemCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    // description: '',
    // image_url: '',
    // location: '',
    // repository: '',

  });
  const [items, setItems] = useState({})
  const { title} = formData;
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    const handleCreate = async (formData) => {
      const newItem = await postItem(formData);
      setItems(prevState => [...prevState, newItem]);
      history.push('/items');
    }  
  
    return (

      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}>
        <h3>Create Item</h3>
        <label>Title:
        <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
        {/* </label>
        <br />
        <label>Description:
        <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Image URL
        <input
            type='text'
            name='image_url'
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Location
        <input
            type='text'
            name='location'
            value={location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Repository
        <input
            type='text'
            name='repository'
            value={repository}
            onChange={handleChange}
          /> */}
        </label>
        <br />
        <button>Submit</button>
        </form>
        
    )
  }
}