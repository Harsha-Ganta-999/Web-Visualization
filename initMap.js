const apiKey = 'AIzaSyA9P4DEsGBOHHrcq91U04jmL7qNbRurGAw'; // Replace with your actual API key
const city = 'Kansas City'; // Replace with your desired city

// Create a request to the Places API
const request = {
  query: `postal code of ${city}`,
  fields: ['name', 'geometry', 'address_components'],
};

// Execute the request
const service = new google.maps.places.PlacesService(map); // Replace 'map' with your Google Map instance
service.textSearch(request, handleSearchResults);

// Handle the search results
function handleSearchResults(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    const zipCodes = [];

    for (const result of results) {
      for (const component of result.address_components) {
        if (component.types.includes('postal_code')) {
          zipCodes.push(component.short_name);
        }
      }
    }

    console.log(`Zip Codes for ${city}:`, zipCodes);
  } else {
    console.error('Places API request failed with status:', status);
  }
}
