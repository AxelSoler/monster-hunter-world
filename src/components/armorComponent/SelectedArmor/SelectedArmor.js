import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const SelectedArmor = () => {
  const { armorname } = useParams();
  const allArmors = useSelector((state) => state.allArmor);
  const armorArray = allArmors.filter((element) => element.armorName === armorname);
  const armor = armorArray[0];

  if (armor !== undefined) {
    return (
      <div className="monsterAbout">
        <h2>{armor.armorName}</h2>
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

export default SelectedArmor;
