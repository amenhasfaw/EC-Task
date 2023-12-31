import GoogleMapReact from 'google-map-react';


const Map = ({ coords, setCoords, setBounds, attractions, range }) => {
  const center = { lat: coords.lat, lng: coords.lng };
  let zoom = 15.4 - (range/3)

  const MarkersC = ({ text, rating }) => (
    <div className="marker">
      <img src="pin-icon.png" alt="Pin" className="pin-icon" />
      <div className="marker-tooltip">{text} - {rating}</div>
    </div>
  );
  
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }} 
        center={center}
        zoom={zoom}
        className="map"
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {attractions.map((attraction, i) => (
          <MarkersC lat={attraction.latitude} lng={attraction.longitude} text={attraction.name} rating={attraction.rating} key={i} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
