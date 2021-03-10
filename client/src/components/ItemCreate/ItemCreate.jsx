import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postItem } from "../../services/items";

export default function ItemCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    location_id: "",
    repository: "",
  });
  const { locations, handleCreate} = props;
  console.log(locations);
  
  const { title, description, image_url, location_id, repository } = formData;

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div className="formcreate">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3>Create Item</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <br />

        <select defaultValue="default" onChange={handleChange} name="location_id">
          <option value="default" disabled>
            -- Select a location --
          </option>
          {locations.map((location) => (
            <option value={location.id} key={location.id} >
              {location.repository}
            </option>
          ))}
        </select>
        <button>add</button>

        <button>Submit</button>
      </form>
    </div>
  );
}
