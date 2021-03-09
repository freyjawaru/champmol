import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneItem } from '../../services/items';
import { addItemToLocation } from '../../services/locationsItems';

export default function ItemDetail(props) {
  const [item, setItem] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('')
  const { id } = useParams();
  const { locations } = props;

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await getOneItem(id);
      setItem(itemData);
    }
    fetchItem();
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedLocation(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = await addItemToLocation(selectedLocation, id);
    setItem(itemData);
  }

  return (
    <div>
      <h3>{item?.name}</h3>
      {/* {locations.map((location) => (
        <p key={location.id}>{location.name}</p>
      ))} */}
      {/* <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" disabled>-- Select a Location --</option>
          {locations.map(location => (
            <option value={location.id} key={location.id}>{location.name}</option>
          ))}
        </select>
        <button>add</button>
      </form> */}

    </div>
  )
}