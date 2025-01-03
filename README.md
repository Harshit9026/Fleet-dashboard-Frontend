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
- Docker (optional for containerization)  

### Setup  

#### Clone the Repository  
```bash
git clone [https://github.com/your-username/robot-fleet-dashboard.git](https://github.com/Harshit9026/Fleet-dashboard-Frontend)
cd robot-fleet-dashboard

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

=======
# Fleet-Montoring-Dashboard
>>>>>>> 87d726b9d1c66427051b1bb84f42786a0ae0f2d6
