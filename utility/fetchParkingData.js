async function fetchParkingData() {
    const response = await fetch('./filtered-parking.json');
    return await response.json();
}