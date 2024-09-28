const API_URL = 'https://swapi.dev/api/starships/';
// base URLfor the starships endpoint

// asynchronous function that fetches starship data
export const getAllStarships = async (page=1) => {
  try {
     const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); 
    return data.results; 
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw error;
  }
};
