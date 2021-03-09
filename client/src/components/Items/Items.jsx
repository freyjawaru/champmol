import React from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  const { items, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Items</h3>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={`/items/${item.id}`}><p>{item.name}</p></Link>
          { item.user_id === currentUser?.id &&
            <>
              <Link to={`/items/${item.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/items/new'><button>Create</button></Link>
    </div>
  )
}
