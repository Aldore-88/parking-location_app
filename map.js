// function dataTest(){
//     return [
//     { lat: -37.8124, lon: 144.9623, title: "Location 1" },
//     { lat: -37.8144, lon: 144.9643, title: "Location 2" },
//     { lat: -37.8184, lon: 144.9603, title: "Location 3" },
// ];
// }

let map;

async function initMap() {
    const fetchedData = await fetch('./filtered-parking.json');
    const locations = await fetchedData.json();

    const melbourne_cbd = {
        lat: -37.8124,
        lng: 144.9623
    };

    // Create the map
    map = new google.maps.Map(
        document.getElementById("map"), {
        zoom: 17.56,
        center: melbourne_cbd,
    });

    // Create markers for each location
    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lon },
            map: map,
            title: location.title
        });
    });
}
