import React from 'react';
import { Link } from 'react-router-dom';

export default function Items(props) {
  const { Items, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Items</h3>
      {Items.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={`/Items/${item.id}`}><p>{item.name}</p></Link>
          { item.user_id === currentUser?.id &&
            <>
              <Link to={`/Items/${item.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/Items/new'><button>Create</button></Link>
    </div>
  )
}
