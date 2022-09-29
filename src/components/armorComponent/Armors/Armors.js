import React from 'react';
import { useSelector } from 'react-redux';
import { getListOfArmor } from '../../../redux/armor/armor';
import store from '../../../redux/configureStore';
import Header from '../../Header/Header';
import Armor from '../Armor/Armor';

const Armors = () => {
  const allArmors = useSelector((state) => state.allArmor);
  if (allArmors.length === 0) {
    store.dispatch(getListOfArmor());
  }

  return (
    <div>
      <Header name="ARMOR" />
      <div className="grid">
        {allArmors.map((armor) => (
          <Armor
            key={armor.armorId}
            id={armor.armorId}
            name={armor.armorName}
          />
        ))}
      </div>
    </div>
  );
};

export default Armors;
