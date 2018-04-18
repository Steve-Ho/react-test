import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMap.css';
 
export class MapContainer extends React.Component {
    render () {
        const style = {
            width: '75%',
            height: '50%'
        }
        return (
            <div className="map">
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: -37.823002,
                    lng: 144.998001
                }}
                zoom={15}
                scrollwheel={false}
            />
            </div>
        )
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC1y48pTyFnsg6DJbmpGpwFMFHjdICMUHA')
})(MapContainer)