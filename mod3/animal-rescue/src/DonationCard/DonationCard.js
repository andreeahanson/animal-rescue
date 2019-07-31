import React from 'react';
import './DonationCard.css';

const DonationCard = ({name, donation}) => {
  return(
    <div className='donation'>
        <p>{name}</p>
        <p>{donation}</p>
      </div>
  )
}

export default DonationCard;