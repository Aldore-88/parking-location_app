import {fetchParkingAPI} from "./fetchParkingAPI.js";
import {expect, jest, test} from "@jest/globals";

//testing fetchParkingAPI
/*
TESTING:
- ~Data is able to be received
- ~Errors 404, 500
- No data received - blank json
- invalid Json
- Correct table headers (structure) - move to saveData
- Incorrect datatype in column - Error - move to SaveData
*/

global.fetch = jest.fn();

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

beforeEach(() => {
    fetch.mockClear();
});

test("Receiving Data", async () => {
    fetch.mockResolvedValueOnce({ 
        ok: true,
        status: 200,
        json: async () => ["testData1"] 
    });

    const data = await fetchParkingAPI();
    expect(data).toEqual(["testData1"]); 
});

test("Error 404 API Not Found", async () => {
    //fetching data, that is blank/null/empty
    //should receive error

    fetch.mockResolvedValueOnce({
        ok: false,
        status: 404
    });

    await expect(fetchParkingAPI()).rejects.toThrow("Fetching API Error: 404");
});

test("Error 500 API Interal Server Error", async () => {
    //fetching data, that is blank/null/empty
    //should receive error

    fetch.mockResolvedValueOnce({
        ok: false,
        status: 500
    });

    await expect(fetchParkingAPI()).rejects.toThrow("Fetching API Error: 500");
});

test("Error - Receiving Blank Array", async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => []
    })

    await expect(fetchParkingAPI()).rejects.toThrow("API returned no parking data")
});

test("Error - Receiving null", async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => null
    })

    await expect(fetchParkingAPI()).rejects.toThrow("API returned no parking data")
});