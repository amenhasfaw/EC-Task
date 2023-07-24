import GoogleMapReact from 'google-map-react';

const Map = ({ coords, setCoords, setBounds, attractions }) => {
  const center = { lat: coords.lat, lng: coords.lng }; // Set the default center of the map (e.g., latitude and longitude)
  const MarkersC = ({ text }) => <div className="contact">{text}</div>;
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCYbKMzHfh9DdMECu0GDK1XFgsv4gRlGHw' }} 
        center={center}
        zoom={14.5}
        className="map"
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {attractions.map((attraction, i) => (
          <MarkersC lat={attraction.latitude} lng={attraction.longitude} text={attraction.name} key={i} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
