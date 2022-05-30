import React from 'react';
import banner from "../../../images/banner/dark-car.jpg";

const Banner = () => {
    return (
      <div className="position-relative">
        <img className="img-fluid cover" src={banner} alt="img" />
      </div>
    );
};

export default Banner;