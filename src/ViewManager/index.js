import React from 'react';

import Main from '../views/Main';
import Cesium from '../containers/Cesium';

let ViewManager = (props) => {
  let name = props.location.search.substr(1);
  console.log(props.location.search.substr(1), 'search name');
  switch(name) {
    case 'cesium':
      return <Cesium />
    default:
      return <Main />
  }
}

export default ViewManager;
