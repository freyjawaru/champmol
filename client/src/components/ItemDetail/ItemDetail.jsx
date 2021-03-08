import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneItem } from '../../services/items';
import { addItemToLocation } from '../../services/locationsItems';

export default function ItemDetail(props) {
  const [Item, setItem] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('')
  const { id } = useParams();
  const { Locations } = props;

  useEffect(() => {
    const fetchItem = async () => {
      const ItemData = await getOneItem(id);
      setItem(ItemData);
    }
    fetchItem();
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedLocation(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ItemData = await addItemToLocation(selectedLocation, id);
    setItem(ItemData);
  }

  return (
    <div>
      <h3>{Item?.name}</h3>
      {Item?.Locations.map((Location) => (
        <p key={Location.id}>{Location.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" disabled>-- Select a Location --</option>
          {Locations.map(Location => (
            <option value={Location.id} key={Location.id}>{Location.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>

    </div>
  )
}