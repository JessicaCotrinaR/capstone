import React from 'react'

const Camera = () => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        id="camera"
        class="inputget"
      ></input>
      <header className="header">Air Pocket </header>
      <div className="container-photo">
        <img id="photo" class="photo"></img>
      </div>
    </div>
  )
}

export default Camera
