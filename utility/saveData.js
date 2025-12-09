import fs from 'fs/promises';

//saves the data into a .json File

export async function saveData(data, fileName, schema){
    if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No data to save");
    }

    // const schema = {
    //     lastupdated: "string",
    //     status_timestamp: "string",
    //     zone_number: "number",
    //     status_description: "string",
    //     kerbsideid: "number",
    //     location: {lon: "number", lat: "number"}
    // }

    //checking against first object from data
    const keys = Object.keys(schema);
    let index = 0;

    while (index < keys.length) {
        const key = keys[index];

        //if key from schema doesnt exist in data
        if (!(key in data[0])){
            throw new Error(`Missing key: ${key} in data to write to ${fileName}`);
        }
        index ++
    }

    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    return (`Saved ${data.length} records to ${fileName}`);
}