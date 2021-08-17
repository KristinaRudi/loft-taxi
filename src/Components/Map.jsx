import React, { Component } from "react";
import mapbox from 'mapbox';
import gl from 'gl';
import '../../src/Styles/map.css';


export class Map extends Component {
    mapContainer = React.createRef();
    render() {
        return <div className="map-wrapper">
            <div data-testid="map" className="map" ref={this.mapContainer} />
            {this.props.children}
        </div>;
    }
}


// export const Map = ({children}) => {
// return ()
// }

export default Map;