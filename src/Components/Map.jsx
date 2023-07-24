// Map.js
import GoogleMapReact from 'google-map-react';

const Map = ({ coords } ) => {
  const center = { lat: coords.lat, lng: coords.lng }; // Set the default center of the map (e.g., latitude and longitude)

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCYbKMzHfh9DdMECu0GDK1XFgsv4gRlGHw' }} // Replace with your actual API key
        center={center}
        defaultZoom={13}
        className="map"
      >
        {/* Map through the attractions and create a marker for each one */}
        {/* {attractions.map((attraction) => (
          <Marker key={attraction.id} lat={attraction.latitude} lng={attraction.longitude} text={attraction.name} />
        ))} */}
      </GoogleMapReact>
    </div>
  );
};

// Marker component to display a marker with a popup
const Marker = ({ text }) => <div className="marker">{text}</div>;

export default Map;
