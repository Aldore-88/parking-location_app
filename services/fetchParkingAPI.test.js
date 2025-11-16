import {fetchParkingAPI} from "./fetchParkingAPI.js";
import {expect, jest, test} from "@jest/globals";

//testing fetchParkingAPI
/*
TESTING:
- No data received - Error
- Correct table headers (structure)
- Incorrect datatype in column - Error
- JSON file received???
*/

global.fetch = jest.fn();

const mockData = [
        "lastupdated":"2025-05-08T05:44:34+00:00",
        "status_timestamp":"2025-04-14T03:01:40+00:00",
        "zone_number":7218,
        "status_description":"Unoccupied",
        "kerbsideid":57940,
        "location":{
        "lon":144.95458322910955,
        "lat":-37.82027020009988
        }
    ]

test("testing 1", async () => {
    fetch.mockResolvedValueOnce({ json: async () => ["data1"] });
    const data = await fetchParkingAPI();
    expect(data).toEqual(["data1"]); 
});

test("Error on no data recieved", async () => {
    //fetching data, that is blank/null/empty
    //should receive error - "Error 404 not found"

    fetch.mockResolvedValueOnce({json: async () => [""]});
    const data = await fetchParkingAPI();
    expect(data).reject.toThrow("Error 404")
});