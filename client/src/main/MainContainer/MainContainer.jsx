import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { destroyItem, getAllItems, postItem, putItem } from '../../services/items';
import { getAllLocations } from '../../services/locations';
import Items from '../../components/Items/Items';
import Locations from '../../components/Locations/Locations';
import ItemCreate from '../../components/ItemCreate/ItemCreate';
import ItemEdit from '../../components/ItemEdit/ItemEdit';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

export default function MainContainer(props) {
  const [Items, setItems] = useState([]);
  const [Locations, setLocations] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchItems = async () => {
      const ItemsList = await getAllItems();
      setItems(ItemsList);
    }
    fetchItems();
  }, [])

  useEffect(() => {
    const fetchLocations = async () => {
      const LocationsList = await getAllLocations();
      setLocations(LocationsList);
    }
    fetchLocations();
  }, [])

  const handleCreate = async (formData) => {
    const newItem = await postItem(formData);
    setItems(prevState => [...prevState, newItem]);
    history.push('/Items');
  }

  const handleDelete = async (id) => {
    await destroyItem(id);
    setItems(prevState => prevState.filter((Item) => Item.id !== id))
  }

  const handleUpdate = async (id, formData) => {
    const updatedItem = await putItem(id, formData);
    setItems(prevState => prevState.map((Item) => {
      return Item.id === Number(id) ? updatedItem : Item
    }));
    history.push('/Items');
  }

  return (
    <Switch>
      {
        !currentUser &&
        <Redirect to='/' />
      }
      <Route path='/Items/new'>
        <ItemCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/Items/:id/edit'>
        <ItemEdit
          Items={Items}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/Items/:id'>
        <ItemDetail Locations={Locations} />
      </Route>
      <Route path='/Items'>
        <Items
          Items={Items}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/Locations'>
        <Locations
          Locations={Locations}
        />
      </Route>
    </Switch>
  )
}