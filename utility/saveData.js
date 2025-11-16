import fs from 'fs/promises';

//saves the data into a .json File

export async function saveData(data){
    await fs.writeFile("parking-data.json", JSON.stringify(data, null, 2));
    console.log(`Saved ${data.length} records to parking-data.json`);
}
