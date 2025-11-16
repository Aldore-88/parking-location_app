import {saveData} from "./saveData.js";
import {expect, jest, test} from "@jest/globals";
import { resolveSoa } from "dns";
import fs from "fs/promises";

/*
Testing saveData function
- error when data is not an array/empty/null
- checking the key names are correct (is checking 1 set enough? or do i need to check all?)
--
- error raised if a key is incorrect
- checking for incorrect datatype in table? (could be an issue with a big dataset?)
- stringifying data correctly
- writing to correct file
*/

// const mockData = [{
//         "lastupdated":"2025-05-08T05:44:34+00:00",
//         "status_timestamp":"2025-04-14T03:01:40+00:00",
//         "zone_number":7218,
//         "status_description":"Unoccupied",
//         "kerbsideid":57940,
//         "location":{
//         "lon":144.95458322910955,
//         "lat":-37.82027020009988
//         }
//     }]

test("Error - data is not an array", async () => {
    const data = { lastUpdated: "2025-05-08T05:44:34+00:00" };

    await expect(saveData(data)).rejects.toThrow("No data to save");
});


test("Error - data is empty", async () => {
    const emptyData = [];

    await expect(saveData(emptyData)).rejects.toThrow("No data to save");
});


test("Error - data is null", async () => {
    const nullData = null;

    await expect(saveData(nullData)).rejects.toThrow("No data to save");
});

// **need to either intercept the writing of the parking-data.json, or write to a mock file**
test("Checking correct keys are present - All keys present", async () => {
    const mockData_complete =[{
        "lastUpdated":"2025-05-08T05:44:34+00:00",
        "status_timestamp":"2025-04-14T03:01:40+00:00",
        "zone_number":7218,
        "status_description":"Unoccupied",
        "kerbsideid":57940,
        "location":{
            "lon":144.95458322910955,
            "lat":-37.82027020009988
        }
    }]

    await expect(saveData(mockData_complete)).resolves.toBe(
        `Saved ${mockData_complete.length} records to parking-data.json`
    );
});


test("Checking correct keys are present - key missing/incorrect", async() => {
    const mockData_incomplete =[{
        "lastUpdated":"2025-05-08T05:44:34+00:00",
        "status_timestamp":"2025-04-14T03:01:40+00:00",
        // "zone_number":7218,
        "status_description":"Unoccupied",
        "kerbsideid":57940,
        "location":{
            "lon":144.95458322910955,
            "lat":-37.82027020009988
        }
    }]

    const missingKey = "zone_number";
    await expect(saveData(mockData_incomplete)).rejects.toThrow(`Missing key: ${missingKey}`)
});