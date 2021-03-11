import React from 'react'
import './Locations.css';

export default function Locations(props) {
  const { locations } = props;

  return (
    <div className="locationContainer">
      <h3>Locations</h3>
      {locations.map((location) => (
        <div className="locationList"key={location.id}>{location.repository}</div>
      ))}
    </div>
  )
}
