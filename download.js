import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
  params: {
    locationId: '304554'
  },
  headers: {
    'X-RapidAPI-Key': 'bd1fa12b49msh6da84797acf39b6p153d6djsn24ee2287ea04',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    console.log('Data:', response.data.data, { depth: null });
} catch (error) {
	console.error(error);
}