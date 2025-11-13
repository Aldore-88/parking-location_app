function initMap() {
    // The location of Geeksforgeeks office
    const gfg_office = {
        lat: 28.50231,
        lng: 77.40548
    };

    // Create the map, centered at gfg_office
    const map = new google.maps.Map(
        document.getElementById("map"), {
        zoom: 17.56,
        center: gfg_office,
    });

    // Add a marker at the center location
    const marker = new google.maps.Marker({
        position: gfg_office,
        map: map,
        title: "GeeksforGeeks Office"
    });

    // Add multiple markers example
    const locations = [
        { lat: 28.5025, lng: 77.4055, title: "Location 1" },
        { lat: 28.5030, lng: 77.4060, title: "Location 2" },
        { lat: 28.5020, lng: 77.4045, title: "Location 3" }
    ];

    // Create markers for each location
    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}
