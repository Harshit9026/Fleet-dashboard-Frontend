import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarkerIcon from '../assests/map-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
    iconUrl: customMarkerIcon, // Use the custom image here
    shadowUrl: markerShadow,   // Use Leaflet's default shadow
    iconSize: [30, 45],        // Adjust the size to fit your image
    iconAnchor: [15, 45],      // Point where the icon is anchored (bottom center)
    popupAnchor: [0, -40],     // Point where the popup opens relative to the iconAnchor
});

function MapView({ robots }) {
    return (
        <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: '400px', width: '100%' }}>
           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {robots.map((robot) => (
                // Check if robot.location exists and has lat/lng properties
                robot.location?.lat && robot.location?.lng ? (
                    <Marker key={robot.id} position={[robot.location.lat, robot.location.lng]} icon={customIcon}>
                        <Popup>
                            <strong>{robot.id}</strong>
                            <br />
                            Battery: {robot.battery}%
                            <br />
                            Status: {robot.online ? 'Online' : 'Offline'}
                        </Popup>
                    </Marker>
                ) : null // Skip marker if location is missing
            ))}
        </MapContainer>
    );
}

export default MapView;
