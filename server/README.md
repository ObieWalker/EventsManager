## For installation
* cd into the server folder
* Run npm install to install all dependencies
* Run npm run start:dev to start the server

## Testing with POSTMAN
> Send a PUT request to 127.0.0.1:8080/events/1 with this in the body `{
  centerId: 1015,
  centerName: 'Sunset Cottage,
  Location: 'Victoria Island, Lagos',
  capacity: 200,
  facility: ['Projector', 'Stage']
}`

## Tests
> To run tests, use `npm test`