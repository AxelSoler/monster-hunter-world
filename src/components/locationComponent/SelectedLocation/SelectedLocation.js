import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const SelectedLocation = () => {
  const { locationname } = useParams();
  const allLocation = useSelector((state) => state.allLocation);
  const locationArray = allLocation.filter((element) => element.locationName === locationname);
  const location = locationArray[0];

  if (location !== undefined) {
    return (
      <div className="monsterAbout">
        <h2>{location.locationName}</h2>
      </div>
    );
  }

  return (
    <div>
      <button className="returnBtn" type="button">
        <NavLink to="/">RETURN TO MAIN PAGE</NavLink>
      </button>
    </div>
  );
};

export default SelectedLocation;
