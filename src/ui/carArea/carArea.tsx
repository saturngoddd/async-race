import React from 'react';
import style from './carArea.module.css';
import CarLogo from '../../icons/CarLogo';

function CarArea() {
  return (
    <div className={style.carWrapper}>
      <div className={style.carItem}>
        <div className={style.carOption}>
          <img
            className={style.carIcons}
            src="/src/icons/icons8-close.svg"
            alt="close-button"
          />
          <img
            className={style.carIcons}
            src="/src/icons/icons8-modify.svg"
            alt="close-button"
          />
          <img
            className={style.carIcons}
            src="/src/icons/icons8-car-30.png"
            alt="close-button"
          />
          <img
            className={style.carIcons}
            src="/src/icons/icons8-return-50.png"
            alt="close-button"
          />
          <p className={style.carName}>Car name</p>
        </div>
        <CarLogo className={style.carLogo} />
      </div>
    </div>
  );
}

export default CarArea;
