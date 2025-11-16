//grabs data from the parking API
export async function fetchParkingAPI(){
        const response = await fetch('https://data.melbourne.vic.gov.au/api/explore/v2.1/catalog/datasets/on-street-parking-bay-sensors/exports/json?lang=en&timezone=Australia%2FSydney');

        return await response.json();
}