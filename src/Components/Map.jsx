import React, { Component } from "react";
import mapbox from 'mapbox';
import gl from 'gl';
import '../../src/Styles/map.css';
import mapboxgl from "mapbox-gl";


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoia3Jpc3RpbmE2Mzk1IiwiYSI6ImNrc2c4MWVpZjB5N2EzMG9mZjUzcGVjeHoifQ.UGu88nFoDyRhqbBGGPbjYQ";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })
  }

  componentWillUnmount(){
    this.map.remove()
  }
  
  render() {
    return <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
      {this.props.children}
    </div>
  }
}


// export const Map = ({children}) => {
// return ()
// }

export default Map;