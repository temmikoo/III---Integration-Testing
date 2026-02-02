# Hex to RGB REST API

Simple REST API built with Node.js and Express that converts a hexadecimal color value to RGB.

## Endpoint

GET /hex/:hex

Example:
GET /hex/ff0000  
Response:
{ "r": 255, "g": 0, "b": 0 }

## Testing

Install dependencies:
npm install

Run tests:
npm test

Tests included:

- Unit tests for hexToRgb function (Mocha + Chai)
- Integration tests for REST API route (Supertest)

Manual REST API testing was done using Postman.
