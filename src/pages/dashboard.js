import React, { useEffect, useState } from 'react';
import RobotList from '../components/RobotList';
import MapView from '../components/MapView';
import './dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchRobots = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/robots');
                const data = await response.json();
                setRobots(data);
            } catch (error) {
                console.error('Error fetching robots:', error);
            } finally {
                setLoading(false); // Stop loading when the data is fetched
            }
        };
        fetchRobots();

        const ws = new WebSocket('ws://localhost:5001');
        ws.onmessage = (event) => {
            const updatedRobots = JSON.parse(event.data);
            setRobots(updatedRobots);
        };
    }, []);


    return (
        <div>

<div className="flex justify-between items-center p-4 bg-blue-600 text-white">
                {/* Left-aligned Heading */}
                <h1 className="text-2xl font-bold">Fleet Monitoring Dashboard</h1>

                {/* Right-aligned Home Button */}
                <Link
                    to="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Go to Home
                </Link>
            </div>
            
            {/* <h1 className='heading'>Fleet Monitoring Dashboard</h1> */}
            <RobotList robots={robots} />
            <MapView robots={robots} />
        </div>
    );
}

export default Dashboard;
