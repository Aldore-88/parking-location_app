# WHAT I WANT TO DO
Create a parking service app that utilizes the Melbourne CBD parking locations. Integrating with Google Maps/or just any maps?

---

## Implementation of Google Maps
- Implementation is doable, making locations is good
- Marking locations on the Google Maps of all locations that are free → using the lat/lon coordinates from the JSON
- Coloured location markers depending on duration? → current time minus the sensor trigger time

---

## Access Melbourne CBD Parking Location API
- Accessed - is there a max limit to how often this can be called before being blocked?
- Updater, to current data that is stored. Updating the locations that have been triggered every (5min?)

---

## Database/JSON to Collect the Status of the Locations
- Use JSON file to start with (testing on local first)
- Data stored into database?
- Do I need all the data? What is `status_timestamp` and which ID is most relevant?
- How do I have this run and track data over time? Onto a proper database host?

---

## Location Calculation
- Only display those parking locations that are within a distance away from a set location.

---

## Tests
- Write some tests (for David and Wayne REECE)
- Error handling - What if nothing comes back?
