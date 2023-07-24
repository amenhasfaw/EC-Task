import GoogleMapReact from 'google-map-react';

const Map = ({ coords, setCoords, setBounds, attractions }) => {
  const center = { lat: coords.lat, lng: coords.lng }; // Set the default center of the map (e.g., latitude and longitude)

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCYbKMzHfh9DdMECu0GDK1XFgsv4gRlGHw' }} 
        center={center}
        defaultZoom={14}
        className="map"
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {attractions.map((attraction) => (
          <Marker key={attraction.id} lat={attraction.latitude} lng={attraction.longitude} text={attraction.name} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({text}) => <div className="marker">{text}</div>;

export default Map;
