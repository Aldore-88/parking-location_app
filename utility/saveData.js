//saves the data into a .json File

export function saveData(data){
    fs.writeFile('parking-data.json', JSON.stringify(data, null, 2));
    console.log(`Saved ${data.length} records to parking-data.json`);

    return 200;
}