// App.js
import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import RangeSlider from './components/RangeSlider.jsx';
import AttractionList from './components/AttractionList.jsx';
import Map from './components/Map.jsx';
import { getPlacesData } from './api';
import './App.css';

const App = () => {
  const [rangeValue, setRangeValue] = useState(3); 
  const [selectedFilter, setSelectedFilter] = useState('Attractions');
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [places, setPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if(bounds){
      getPlacesData(selectedFilter, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces([])
          return data
        }).then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        });
      }
  }, [bounds, selectedFilter]);


  const handleRangeChange = (value) => {
    setRangeValue(value);
  };

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedFilter(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };



  return (
    <div className="app">
      <Header 
        filterValue={selectedFilter} 
        filterOnChange={handleFilterChange}
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
        onPlaceChanged={onPlaceChanged} 
        onLoad={onLoad}  />
      <RangeSlider value={rangeValue} onChange={handleRangeChange} />
      <div className="main-content">
        <AttractionList
          selectedFilter= {selectedFilter}
          attractions= {places}/>
        <Map 
          coords={coords}
          setCoords={setCoords}
          setBounds={setBounds}
          attractions = {places}
          range={rangeValue}/>
      </div>
    </div>
  );
};

export default App;
