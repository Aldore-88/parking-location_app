import { saveData } from "../utility/saveData.js";
import { saveMetaData } from "../utility/saveMetaData.js";
import { fetchParkingAPI } from "./fetchParkingAPI.js";

//fetching api data and saving


export async function fetchApiAndSave(){
    try{
        const data = await fetchParkingAPI();
        const message = await saveData(data);
        console.log(message);
        const count = data;
        saveMetaData(count);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
};