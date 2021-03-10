import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

export default function Items(props) {
  const { items, handleDelete, currentUser } = props;

  return (
    <div className="itemContainer">
      <h3>Items</h3>
      {items.map((item) => (
        <div className="itemDiv" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <p className="itemList">{item.title}</p>
          </Link>

          {item.user_id === currentUser?.id && (
            <div className="itemButtons">
              <Link to={`/items/${item.id}/edit`}>
                <button>edit</button>
              </Link>

              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          )}
        </div>
      ))}
      <div className="createButton">
        <Link to="/items/new">
          <button>Create</button>
        </Link>
      </div>
    </div>
  );
}
