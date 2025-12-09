import { saveData } from "../utility/saveData.js";
import { saveMetaData } from "../utility/saveMetaData.js";
import { fetchParkingAPI } from "./fetchParkingAPI.js";

//fetching api data and saving


export async function fetchApiAndSave(){
    try{
        const data = await fetchParkingAPI();

        const schema = {
            lastupdated: "string",
            status_timestamp: "string",
            zone_number: "number",
            status_description: "string",
            kerbsideid: "number",
            location: {lon: "number", lat: "number"}
        }

        const message = await saveData(data, "parking-data.json", schema);
        console.log(message);
        const count = data;
        saveMetaData(count);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
};