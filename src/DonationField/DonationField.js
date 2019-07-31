import React from 'react';
import './DonationField.css';
import { connect } from 'react-redux';
import DonationCard from '../DonationCard/DonationCard';

const DonationField = ({donations}) => {
  const allDonations = donations.map(donation => {
    return (
      <DonationCard 
      key={Math.random()}
      name={donation.name}
      donation={donation.donation}
      />
    )
  })
  return allDonations;
}

const mapStateToProps = state => ({
  donations: state.donations
})

export default connect(mapStateToProps)(DonationField)