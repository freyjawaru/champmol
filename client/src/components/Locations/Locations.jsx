import React from 'react'

export default function Locations(props) {
  const { Locations } = props;

  return (
    <div>
      <h3>Locations</h3>
      {Locations.map((location) => (
        <p key={location.id}>{location.name}</p>
      ))}
    </div>
  )
}
