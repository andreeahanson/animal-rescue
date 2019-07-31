export const fetchAnimals = async () => {
  const url = 'http://localhost:3001/api/v1/rescue-animals';
  try {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('There was an error getting the animals.')
    }
    const animals = await response.json();
    return animals;
  } catch (error) {
    throw new Error(error.message)
  }
}