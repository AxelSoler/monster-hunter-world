import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const SelectedWeapon = () => {
  const { weaponname } = useParams();
  const allWeapon = useSelector((state) => state.allWeapon);
  const weaponArray = allWeapon.filter((element) => element.weaponName === weaponname);
  const weapon = weaponArray[0];

  if (weapon !== undefined) {
    return (
      <div className="monsterAbout">
        <h2>{weapon.weaponName}</h2>
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

export default SelectedWeapon;
