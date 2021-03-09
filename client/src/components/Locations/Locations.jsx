import React from 'react'

export default function Locations(props) {
  const { locations } = props;

  return (
    <div>
      <h3>Locations</h3>
      {locations.map((location) => (
        <p key={location.id}>{location.name}</p>
      ))}
    </div>
  )
}
