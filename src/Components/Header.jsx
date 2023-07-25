import { Autocomplete } from '@react-google-maps/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Header = ({ filterValue, filterOnChange, onDateChange, onSearchChange, selectedDate, onLoad, onPlaceChanged }) => {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    onSearchChange(searchValue);
  };


  return (
    <header className="header">
      <div className="header__search-container">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Search..."
              className="header__search"
              onChange={handleSearchChange}
            />
          </Autocomplete>
      </div>
      {filterValue === 'Hotels' && (
        <div className="header__date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="header__date-picker"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      )}
      <div id='filter'>
        <label className="header__button">Filter :</label>
        <div className="dropdown-filter">
          <select value={filterValue} onChange={filterOnChange}>
            <option value="Attractions">Attractions</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Hotels">Hotels</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
