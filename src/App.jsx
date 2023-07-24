// App.js
import { useEffect, useState } from 'react';
import Header from './components/Header';
import RangeSlider from './components/RangeSlider';
import AttractionList from './components/AttractionList';
import Map from './components/Map';
import { getPlacesData } from './api';
import './App.css';

const App = () => {
  const [rangeValue, setRangeValue] = useState(3); // Set the default range value to 3 KM
  const [selectedFilter, setSelectedFilter] = useState('Attractions');
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if(bounds){
      getPlacesData(selectedFilter, bounds.sw, bounds.ne)
        .then((data) => {
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

  const handleSearchChange = (searchValue) => {
    setSearchText(searchValue);
  };



  return (
    <div className="app">
      <Header 
        filterValue={selectedFilter} 
        filterOnChange={handleFilterChange}
        onDateChange={handleDateChange}
        onSearchChange={handleSearchChange}
        selectedDate={selectedDate} />
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
