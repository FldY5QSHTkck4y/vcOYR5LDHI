import React, {
  useEffect,
  useRef,
} from 'react';

import {
  Viewer,
  Camera,
  Rectangle,
  Ion,
  WebMercatorProjection,
  createDefaultImageryProviderViewModels,
  createWorldTerrain,
} from 'cesium';

let Cesium = () => { 
  let containerRef = useRef();
  useEffect(() => {
    if (!containerRef && !containerRef.current) {
      return;
    }

    let imageryProvideViewModels = createDefaultImageryProviderViewModels();
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NmE1ODJhMi0yMGI4LTRlNGYtYjJjNi05NTU4M2M5NTM5NTciLCJpZCI6NTE3MTgsImlhdCI6MTYxODI4MTk1MH0.zF9dW7BBrd2pvj8GRraNaB9vW7egEYraLTDJgDm8cWk';

    let homeExtent = new Rectangle.fromDegrees(
      106.8283, // E
      -21.1750, // S
      120, // W
      20, // N
    );

    Camera.DEFAULT_VIEW_RECTANGLE = homeExtent;
    Camera.DEFAULT_VIEW_FACTOR = 0;

    let viewer = new Viewer(containerRef.current, {
      animation: false,
      geocoder: false,
      navigationHelpButton: false,
      selectionIndicator: false,
      timeline: false,
      // set esri imager
      baseLayerPicker: true,
      imageryProviderViewModels: imageryProvideViewModels,
      selectedImageryProviderViewModel: imageryProvideViewModels[3],
      terrainProvide: createWorldTerrain(),
      mapProjection: new WebMercatorProjection(),
      // save GPU memory
      scene3DOnly: true, // scene only in 3d
      automaticallyTrackDataSourceClocks: false,
      // framerate?
      targetFrameRate: 30,
    });

    return () => {
      viewer && viewer.destroy();
    };
  }, []);

  let styleObj = {
    width: '100%',
    height: '100%',
  };

  return <div
    ref={containerRef}
    style={styleObj}
  >
  </div>
};

export default Cesium;
