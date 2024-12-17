import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Fleet Monitoring Dashboard</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="hover:underline">Features</a></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section class="bg-blue-100 py-16 text-center">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-4">Monitor Your Fleet in Real-Time</h2>
            <p class="text-lg text-gray-700 mb-6">Stay connected with your robots and monitor their performance effortlessly.</p>
            <div className="text-center my-10">
                <Link
                    to="/dashboard"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Go to Dashboard
                </Link>
            </div>
        </div>
    </section>

    <section id="features" class="py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow p-6 rounded">
                    <h3 className="text-xl font-bold mb-2">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Track the status and location of your robots with live updates.</p>
                </div>
                <div className="bg-white shadow p-6 rounded">
                    <h3 className="text-xl font-bold mb-2">Battery Alerts</h3>
                    <p className="text-gray-600">Get notified when battery levels are low to ensure uninterrupted operations.</p>
                </div>
                <div className="bg-white shadow p-6 rounded">
                    <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                    <p className="text-gray-600">Analyze CPU and RAM usage to optimize your fleet's efficiency.</p>
                </div>
            </div>
        </div>
    </section>
 
            <footer className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Fleet Monitoring Dashboard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
