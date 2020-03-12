import React from 'react';
import ReactDOM from 'react-dom'
import { loadModules } from 'esri-loader';
import Geometria from './../../components/Geometria'
export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
    .then(([ArcGISMap, MapView]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-80.21, 25.78],
        zoom: 5
      });

      var node = document.createElement("div");
      this.view.ui.add(node, "bottom-left");
      ReactDOM.render(
        <Geometria view={this.view}/>,
        node
      );

    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef}>

      </div>
    );
  }
}
export default WebMapView;