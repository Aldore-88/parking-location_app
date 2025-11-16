import { fetchParkingAPI } from "./services/fetchParkingAPI.js";
import { saveData } from "./utility/saveData.js";

/*
get data from API (fetchParkingAPI)
save the data from the API to .json file (saveData)
--
save metadata about the event, storing number of records and time/date fetched (saveMetaData)
*/

async function fetchApiAndSave(){
    try{
        const data = await fetchParkingAPI();
        await saveData(data);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
};

fetchApiAndSave()