import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../../redux/configureStore';
import { getListOfLocation } from '../../../redux/location/location';
import Location from '../Location/Location';

const Locations = () => {
  const allLocation = useSelector((state) => state.allLocation);
  if (allLocation.length === 0) {
    store.dispatch(getListOfLocation());
  }

  return (
    <div>
      <div className="grid">
        {allLocation.map((location) => (
          <Location
            key={location.locationId}
            id={location.locationId}
            name={location.locationName}
          />
        ))}
      </div>
    </div>
  );
};

export default Locations;
