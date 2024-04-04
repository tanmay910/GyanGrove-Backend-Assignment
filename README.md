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
   git clone https://github.com/tanmay910/GyanGrove-Backend-Assignment.git
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

Below is the updated API documentation with response format included:

---

## Event Finder API

### Welcome Message

- **URL:** `/`

- **Method:** `GET`

- **Description:** Returns a welcome message for the event finder API.

- **Example:**
  ```bash
  curl "http://localhost:3000/"
  ```

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Welcome to the event finder API"
    }
    ```

---

### Ingest Data

- **URL:** `/ingest`

- **Method:** `POST`

- **Description:** Ingests event data from a CSV file into the database.

- **Example:**
  ```bash
  curl -X POST "http://localhost:3000/ingest"
  ```

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "CSV data imported successfully"
    }
    ```

- **Error Response:**
  - Status Code: `500 Internal Server Error`
  - Body:
    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### Find Events

- **URL:** `/events/find`

- **Method:** `GET`

- **Query Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
  - `date`: Date in `YYYY-MM-DD` format
  - `page`: Page number
  - `pageSize`: Number of events per page

- **Description:** Retrieves events occurring within the next 14 days from the specified date, sorted by date. Also provide pagination parameters (`page` and `pageSize`).

- **Example:**
  ```bash
  curl "http://localhost:3000/events/find?latitude=40.7128&longitude=-74.0060&date=2024-03-15&page=1&pageSize=10"
  ```

- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "events": [
        {
          "event_name": "Event Name",
          "city_name": "City Name",
          "date": "YYYY-MM-DD",
          "weather": {
            "condition": "Weather Condition",
            "temperature": "Temperature in Celsius"
          },
          "distance_km": "Distance from User's Location in Kilometers"
        },
        ...
      ],
      "page": 1,
      "pageSize": 10,
      "totalEvents": 100,
      "totalPages": 10
    }
    ```

- **Error Response:**
  - Status Code: `500 Internal Server Error`
  - Body:
    ```json
    {
      "error": "Failed to find events"
    }
    ```

---

Please note that the example URLs provided assume that the server is running locally on port 3000. Adjust the base URL accordingly if the server is hosted on a different port or domain.
Sure, here's the updated README with instructions for users to access the deployed application on Render:

---

## Project Deployment

The Event Management System has been deployed and is accessible on Render. You can access the application using the following URL:

[https://gyangrove-backend-assignment.onrender.com/](https://gyangrove-backend-assignment.onrender.com/)

## Usage

### Note:

- **Data Ingestion:** Please note that the `/ingest` endpoint (`https://gyangrove-backend-assignment.onrender.com/ingest`) is provided for ingesting event data from a CSV file into the database. However, it is recommended not to run this endpoint again as data has already been inserted into the database, as running it multiple times may result in duplicate data. The system has already been pre-populated with data, so you may proceed directly to querying events using the other available endpoints.

To use the Event Management System, follow these steps:

1. Visit the provided URL for the deployed application.
2. Use the provided API endpoints to manage and query event data based on geographical location and date.
3. Refer to the API documentation in this README for details on available endpoints and request/response formats.





If you encounter any issues or have questions, please feel free to contact the contributors listed below.

---
Here's the formatted section for the test case execution:

---

## Test Case Execution

Please refer to the attached screen recording or screenshots for the execution of the provided test case through the API.

### From Terminal

#### Inserting Data
![Insert Data](https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/9c964540-58e0-40c2-a98d-ba801892ef50)

#### Finding Events
![Find Events](https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/5b68dc2d-9c44-4c46-9e91-8d870237f2cb)


### From deloplyed url 
The screenshots are displayed using a JSON viewer extension for better readability.

<img width="1408" alt="main page" src="https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/986d8d03-e314-4db0-817d-ff454ea4c323">
<img width="1362" alt="respone 1" src="https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/4b95d9d2-3b17-4e6c-9645-e44758093d0b">
<img width="1122" alt="response 2" src="https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/f87884f0-834d-461c-b2e2-18cf7835ff10">

#### whithout using json viewer

<img width="1678" alt="Screenshot 2024-04-04 at 8 24 05 PM" src="https://github.com/tanmay910/GyanGrove-Backend-Assignment/assets/105966781/c64715f4-a63b-47ac-b40b-6cd00a9d247b">



## Contributors

- [Tanmay Mahajan](https://github.com/tanmay910)

If you encounter any issues or have questions, please feel free to contact the contributors listed above.

Thank you for using our Event Management System! We hope it meets your needs effectively.
