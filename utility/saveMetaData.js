import fs from "fs/promises";

//saves metadata about the time and number of files that have been pulled from api


export async function saveMetaData(count){
    const metadata = {
        lastSync: new Date().toISOString(),
        recordCount: count,
    };

    await fs.writeFile('sync-metadata.json', JSON.stringify(metadata, null, 2));
    
    return(`Saved count ${count} at ${metadata.lastSync}`);
}