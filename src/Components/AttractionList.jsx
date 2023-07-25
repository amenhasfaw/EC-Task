
const AttractionList = ({ selectedFilter, attractions }) => {
  return (
    <div className="attraction-list">
      <h6>{selectedFilter}</h6>
      <ul>  
        {attractions.map((attraction) => (
          <li key={attraction.location_id} className="attraction-item">
            <div className="attraction-image">
              <img src={attraction.photo.images.small.url} alt={attraction.name} />
            </div>
            <div className="attraction-info">
              <div className="attraction-name">{attraction.name}</div>
              <div className="attraction-rating">{attraction.rating}</div>
              <div className="attraction-subtype">{attraction.subtype ? attraction.subtype.map(subtype => subtype.name).join(' · ') : ''}</div>
              <div className="attraction-address">{attraction.address ? attraction.address : attraction.ranking}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionList;
