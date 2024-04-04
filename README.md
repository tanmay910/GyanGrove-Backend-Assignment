# GyanGrove-Backend-Assignment
# Event Management System

This repository contains the source code for an Event Management System, which provides RESTful APIs for managing and querying event data based on geographical location and date.

## Tech Stack and Database Choice

### Tech Stack:
- **Node.js**: Used for building the backend server and handling API requests.
- **Express.js**: Utilized as the web framework for Node.js to simplify routing and middleware handling.
- **MongoDB**: Chosen as the database for its flexibility and support for geospatial queries.
- **Mongoose**: Used as an Object Data Modeling (ODM) library for MongoDB, providing a schema-based solution for modeling application data.

### Database Choice:
MongoDB was selected as the database for the following reasons:
- **Geospatial Queries**: MongoDB's native support for geospatial indexes and queries allows efficient retrieval of events based on geographical location.
- **Flexibility**: MongoDB's flexible schema design accommodates diverse event data structures without requiring predefined schemas.
- **Scalability**: MongoDB's horizontal scaling capabilities make it suitable for handling large volumes of event data as the application grows.

### Design Decisions:
- **RESTful Architecture**: The system follows a RESTful design pattern, with clearly defined endpoints for creating and querying events.
- **Indexing**: Utilized MongoDB indexes to optimize query performance, including geospatial indexes on location coordinates and date indexes for efficient date-based filtering.
- **Asynchronous Processing**: Implemented asynchronous handling of API requests to minimize response times and improve scalability.
- **Error Handling**: Implemented robust error handling mechanisms to gracefully handle external API failures and other errors, ensuring reliability and graceful degradation.

## Project Setup and Execution

### Prerequisites:
- Node.js and npm installed on your system.
- MongoDB instance running locally or accessible via a connection URL.

### Steps to Set Up and Run the Project:
1. Clone the repository to your local machine:
   ```
   git clone <repository_url>
   ```
2. Install dependencies:
   ```
   cd event-management-system
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     ```
     MONGODB_URL=<mongodb_connection_url>
     WEATHER_API_KEY=<your_weather_api_key>
     DISTANCE_API_KEY=<your_distance_api_key>
     ```
4. Start the server:
   ```
   npm start
   ```

## API Documentation

### Event Creation Endpoint:
- **POST /events**
  - Request Body:
    ```json
    {
      "eventName": "Event Name",
      "cityName": "City Name",
      "date": "YYYY-MM-DD",
      "time": "HH:MM",
      "latitude": 12.345,
      "longitude": 67.890
    }
    ```
  - Response:
    - Status: 201 Created
    - Body:
      ```json
      {
        "message": "Event created successfully",
        "event": {
          "_id": "event_id",
          "eventName": "Event Name",
          "cityName": "City Name",
          "date": "YYYY-MM-DD",
          "time": "HH:MM",
          "latitude": 12.345,
          "longitude": 67.890
        }
      }
      ```

### Event Query Endpoint:
- **GET /events/find?latitude={latitude}&longitude={longitude}&date={date}**
  - Parameters:
    - `latitude`: User's latitude.
    - `longitude`: User's longitude.
    - `date`: Date in YYYY-MM-DD format.
  - Response:
    - Status: 200 OK
    - Body:
      ```json
      {
        "events": [
          {
            "eventName": "Event Name",
            "cityName": "City Name",
            "date": "YYYY-MM-DD",
            "weather": {
              "condition": "Weather Condition",
              "temperature": "Temperature in Celsius"
            },
            "distance": "Distance from User's Location in Kilometers"
          },
          ...
        ]
      }
      ```

### Error Codes:
- 400 Bad Request: Invalid request parameters or missing required fields.
- 404 Not Found: Resource not found.
- 500 Internal Server Error: Server encountered an unexpected error.

## Test Case Execution

- Please refer to the attached screen recording or screenshots for the execution of the provided test case through the API.

## Contributors

- [Your Name](https://github.com/your_username)

If you encounter any issues or have questions, please feel free to contact the contributors listed above.

Thank you for using our Event Management System! We hope it meets your needs effectively.
