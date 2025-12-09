import fs from "fs/promises"

// filter data to only the keys needed

export async function filterData(){
    const rawData = await fs.readFile('./parking-data.json', 'utf-8');
    const data = JSON.parse(rawData);


    const filteredData = data
    .filter(obj => obj.status_description === "Unoccupied")
    .map(obj => ({
        lat: obj.location.lat,
        lon: obj.location.lon,
        id: obj.kerbsideid
    }));

    return filteredData;
}