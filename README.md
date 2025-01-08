# Robot Fleet Monitoring Dashboard  

## Project Overview  
The **Robot Fleet Monitoring Dashboard** is a full-stack web application designed to monitor a fleet of robots in real-time. It displays essential telemetry data, including status, battery percentage, CPU usage, RAM consumption, and location on a dynamic map.  

This project was developed as part of an assessment challenge and demonstrates skills in **frontend and backend development**, **real-time data handling**, and **deployment strategies**.  

## Features  
- **Real-Time Dashboard**: Displays robot details like ID, status (online/offline), battery percentage, CPU usage, RAM consumption, and last update time.  
- **Dynamic Map Integration**: Visualizes robot locations on a map using **Leaflet.js** or **Mapbox**.  
- **Real-Time Updates**: Fetches telemetry data using **WebSockets** or periodic polling (every 5 seconds).  
- **Highlights Critical Conditions**: Alerts for offline robots or those with low battery (<20%).  
- **Filters**: Allows filtering robots by status (e.g., active, offline, low battery).

## Tech Stack  
### Frontend  
- **React.js**: For building a clean, responsive dashboard.  
- **Leaflet.js/Mapbox**: For rendering a map view of robot locations.  

### Backend  
- **FastAPI**: For simulating telemetry data for up to 10 robots.  
- **WebSocket/REST API**: For exposing real-time data updates.

## Getting Started  

### Prerequisites  
- Node.js and npm (for frontend setup)  
- Python 3.8+ (for backend development)

### Backend Setup
## Clone the repository:
  git clone https://github.com/Harshit9026/Fleet-dashboard-Frontend.git
   
   cd github-clone
   
## Navigate to the backend directory and install dependencies:

cd backend

npm install


## Start the backend server:

nodemon index.js

## Frontend Setup

Navigate to the frontend directory and install dependencies:

cd ../frontend

npm install

## Start the frontend development server:

npm run dev 


## Preview  

### Dashboard View  
![Dashboard Preview](https://github.com/Harshit9026/Fleet-dashboard-Frontend/blob/master/src/assests/dashboardv.jpg?raw=true)

### Map View  
![Map View](https://github.com/Harshit9026/Fleet-dashboard-Frontend/blob/master/src/assests/dashboardview.jpg?raw=true)

### Map View  
![Map View](https://github.com/Harshit9026/Fleet-dashboard-Frontend/blob/master/src/assests/mapview3.png?raw=true)


