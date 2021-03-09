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
  const [items, setItems] = useState([]);
  const [locations, setLocations] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchItems = async () => {
      const itemsList = await getAllItems();
      setItems(itemsList);
    }
    fetchItems();
  }, [])

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsList = await getAllLocations();
      setLocations(locationsList);
    }
    fetchLocations();
  }, [])

  const handleCreate = async (formData) => {
    const newItem = await postItem(formData);
    setItems(prevState => [...prevState, newItem]);
    history.push('/items');
  }

  const handleDelete = async (id) => {
    await destroyItem(id);
    setItems(prevState => prevState.filter((Item) => Item.id !== id))
  }

  const handleUpdate = async (id, formData) => {
    const updatedItem = await putItem(id, formData);
    setItems(prevState => prevState.map((item) => {
      return item.id === Number(id) ? updatedItem : item
    }));
    history.push('/items');
  }

  return (
    <>
      <h3>About</h3>
      <p>The Chartreuse de Champmol was dedicated in 1383 by Margaret of Flanders, the Duchess of Burgundy. She and her husband, Philip the Bold, were active patrons of the monastery and both were personally involved in it throughout their lives. Philip was buried there: his coffin is surrounded with pleurants, or carved grieving monks made by Claus Sluter and his workshop. 
      <br />
      The monastery was destroyed in 1792. Some of the manuscripts and library made their way to Paris, where they were broken and sold by booksellers. Others remained in Dijon.
      
      <br />
      The full design and art program of the monastery has been studied and written about by Sherry Lindquist in her well-known book, Agency, Visuality and Society at the Chartreuse de Champmol. The manuscripts, however, remain mostly unstudied. They are the focus of my future dissertation. The purpose of this site is to gather in one place the manuscripts made by and for the monks of the Chartreuse de Champmol.
      </p>
    <Switch>
      {/* {
        !currentUser &&
        <Redirect to='/' />
      } */}
      <Route path='/items/new'>
        <ItemCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/items/:id/edit'>
        <ItemEdit
          items={items}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/items/:id'>
        <ItemDetail locations={locations} />
      </Route>
      <Route path='/items'>
        <Items
          items={items}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path='/locations'>
        <Locations
          locations={locations}
        />
      </Route>
      </Switch>
      </>
  )
}