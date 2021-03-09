import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { postItem } from '../../services/items'

export default function ItemCreate(props) {
  console.log("this is props", locations)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    location_id: '',
    repository: '',
    
  });
  const {locations } = props;
  const [items, setItems] = useState({})
  const { title,
    description,
  image_url,
  location_id,
  repository,
  } = formData;

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

    const handleCreate = async (formData) => {
      const newItem = await postItem(formData);
      setItems(prevState => [...prevState, newItem]);
      history.push('/items');
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }

  
    return (
<div>test</div>
      // <form onSubmit={(e) => {
      //   e.preventDefault();
      //   handleCreate(formData);
      // }}>
      //   <h3>Create Item</h3>
      //   <label>Title:
      //   <input
      //       type='text'
      //       name='title'
      //       value={title}
      //       onChange={handleChange}
      //     />
      //   </label>
      //   <br />
      //   <label>Description:
      //   <input
      //       type='text'
      //       name='description'
      //       value={description}
      //       onChange={handleChange}
      //     />
      //   </label>
      //   <br />
      //   <label>Image URL
      //   <input
      //       type='text'
      //       name='image_url'
      //       value={image_url}
      //       onChange={handleChange}
      //     />
      //   </label>
      //   <br />
      //   <form onSubmit={handleSubmit}>
      //   <select defaultValue="default" onChange={handleChange}>
      //     <option value="default" disabled>-- Select a location --</option>
      //     {locations.map(location => (
      //       <option value={location.id} key={location.id}>{location.name}</option>
      //     ))}
      //   </select>
      //   <button>add</button>
      // </form>
      //   <br />
      //   <label>Repository
      //   <input
      //       type='text'
      //       name='repository'
      //       value={repository}
      //       onChange={handleChange}
      //     />
      //   </label>
      //   <br />
      //   <button>Submit</button>
      //   </form>
        
    )
  }
