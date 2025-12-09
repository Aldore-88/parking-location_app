import { filterData } from "../utility/filterData.js";
import { saveData } from "../utility/saveData.js";


//filter data and save

export async function filterDataAndSave(){
    try{
        const data = await filterData();

        const schema = {
            lat: "number",
            lon: "number",
            title: "string"
        };

        const message = await saveData(data, "filtered-parking.json", schema);
        console.log(message);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
};