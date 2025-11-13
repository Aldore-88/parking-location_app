import fs from 'fs/promises';

export default async function dataPullAndSave() {
    console.log('Pulling parking sensor data...');
    
    try {
        const response = await fetch('https://data.melbourne.vic.gov.au/api/explore/v2.1/catalog/datasets/on-street-parking-bay-sensors/exports/json?lang=en&timezone=Australia%2FSydney');
        const data = await response.json();
        
        await fs.writeFile('parking-data.json', JSON.stringify(data, null, 2));
        console.log(`Saved ${data.length} records to parking-data.json`);
        // console.log(data);
        
        const metadata = {
            lastSync: new Date().toISOString(),
            recordCount: data.length,
            lastUpdate: new Date().toISOString()
        };

        await fs.writeFile('sync-metadata.json', JSON.stringify(metadata, null, 2));
        console.log('Saved sync metadata');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// pullAndSave();