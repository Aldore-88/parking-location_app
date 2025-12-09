import { fetchApiAndSave } from "./services/fetchApiAndSave.js";
import { fetchParkingAPI } from "./services/fetchParkingAPI.js";
import { saveData } from "./utility/saveData.js";
import { saveMetaData } from "./utility/saveMetaData.js";
import { filterData } from "./utility/filterData.js";
import { filterDataAndSave } from "./services/filterDataAndSave.js";

/*
get data from API (fetchParkingAPI)
save the data from the API to .json file (saveData)
--
save metadata about the event, storing number of records and time/date fetched (saveMetaData)
*/


fetchApiAndSave();

// const filteredData = await filterData();
// console.log(filteredData);
filterDataAndSave();

/*
filteredData -> into map locations

*/