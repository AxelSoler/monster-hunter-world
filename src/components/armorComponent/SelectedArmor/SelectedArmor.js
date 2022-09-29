import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from '../../Header/Header';
import './selectedArmor.css';

const SelectedArmor = () => {
  const { armorname } = useParams();
  const allArmors = useSelector((state) => state.allArmor);
  const armorArray = allArmors.filter((element) => element.armorName === armorname);
  const armor = armorArray[0];

  if (armor !== undefined) {
    return (
      <div>
        <Header name={armor.armorName} />
        <div className="armorAbout">
          <div className="femaleArmor">
            {(() => {
              const rows = [];
              for (let i = 0; i < armor.armorPieces.length; i += 1) {
                if (armor.armorPieces[i].assets.imageFemale) {
                  rows.push(
                    <div key={i}>
                      <img className="armorImg" src={armor.armorPieces[i].assets.imageFemale} alt={armor.armorName} key={i} />
                      <div>
                        <p>
                          Augmented defense
                          {' '}
                          {armor.armorPieces[i].defense.augmented}
                        </p>
                        <p>
                          Base defense
                          {' '}
                          {armor.armorPieces[i].defense.base}
                        </p>
                        <p>
                          Max defense
                          {' '}
                          {armor.armorPieces[i].defense.max}
                        </p>
                      </div>
                    </div>,
                  );
                }
              }
              return rows;
            })()}
          </div>
          <div className="maleArmor">
            {(() => {
              const rows = [];
              for (let i = 0; i < armor.armorPieces.length; i += 1) {
                rows.push(
                  <div key={i}>
                    <img className="armorImg" src={armor.armorPieces[i].assets.imageMale} alt={armor.armorName} key={i} />
                    <div>
                      <p>
                        Augmented defense
                        {' '}
                        {armor.armorPieces[i].defense.augmented}
                      </p>
                      <p>
                        Base defense
                        {' '}
                        {armor.armorPieces[i].defense.base}
                      </p>
                      <p>
                        Max defense
                        {' '}
                        {armor.armorPieces[i].defense.max}
                      </p>
                    </div>
                  </div>,
                );
              }
              return rows;
            })()}
          </div>
        </div>
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
