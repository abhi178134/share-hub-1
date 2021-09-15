import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ desc, fileUrl,author, contact,image,clickable }) => (
  <div>
    {clickable ? (
      <><a href={fileUrl}><Image src={image} alt='movie-thumb'/></a>
      <p>
        {desc}
        <br/>
        Owner:{author}
        <br/>
        Contact:{contact}
      </p>
      </>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool
};

export default Thumb;
