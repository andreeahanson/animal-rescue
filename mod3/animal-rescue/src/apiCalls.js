export const fetchAnimals = async () => {
  const url = 'http://localhost:3001/api/v1/rescue-animals';
  try {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('There was an error fetching the animals.')
    }
    const animals = await response.json();
    return animals;
  } catch (error) {
    throw new Error(error.message)
  }
}

export const fetchDonations = async () => {
  const url= 'http://localhost:3001/api/v1/donations';
  try {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('There was an error fetching the donations.')
    }
    const donations = await response.json();
    return donations;
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createDonation = async (newDonation) => {
  const url = 'http://localhost:3001/api/v1/donations/';
  const options = {
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({...newDonation})
  }
  try {
    const response = await fetch(url, options)
    if(!response.ok){
      throw new Error("Sorry. Unable to create donation")
    }
    const newDonation = await response.json()
    return newDonation;
  } catch (error) {
    throw new Error(error.message)
  }
}