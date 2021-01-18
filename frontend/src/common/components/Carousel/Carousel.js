import React from 'react';
import { any, arrayOf } from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.scss';

const Carousel = ({ items }) => (
  <AliceCarousel
    mouseTracking
    touchTracking
    items={items}
    responsive={{
      0: {
        items: 1,
      },
      730: {
        items: 2,
      },
      1020: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    }}
  />
);

Carousel.propTypes = {
  items: arrayOf(any).isRequired,
};

export default Carousel;
