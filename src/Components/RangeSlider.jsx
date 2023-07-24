// RangeSlider.js
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ value, onChange }) => {
  return (
    <div className="range-slider">
      <Slider
        min={1}
        max={5}
        value={value}
        onChange={onChange}
        railStyle={{ background: '#ccc' }}
        trackStyle={{ background: '#2196f3' }}
        handleStyle={{ borderColor: '#2196f3' }}
        step={1}
      />
      <span>{value} KM</span>
    </div>
  );
};

export default RangeSlider;
