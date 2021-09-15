import React from 'react';
import {
  Link,
} from 'react-router-dom';

let Main = (props) => {
  return (
    <div>
      {JSON.stringify(props.location)}
      Manager Page
      <Link
        to="/?cesium"
        target="_blank"
      >
        Cesium Please
      </Link>
    </div>
  )
}

export default Main;
