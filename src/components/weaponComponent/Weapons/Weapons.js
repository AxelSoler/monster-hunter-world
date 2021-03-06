import React from 'react';
import { useSelector } from 'react-redux';
import { getListOfWeapon } from '../../../redux/weapon/weapon';
import store from '../../../redux/configureStore';
import Weapon from '../Weapon/Weapon';
import Header from '../../Header/Header';

const Weapons = () => {
  const allWeapon = useSelector((state) => state.allWeapon);
  if (allWeapon.length === 0) {
    store.dispatch(getListOfWeapon());
  }

  return (
    <div>
      <Header name="WEAPONS" />
      <div className="grid">
        {allWeapon.map((weapon) => (
          <Weapon key={weapon.weaponId} id={weapon.weaponId} name={weapon.weaponName} />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
