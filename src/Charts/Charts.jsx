import React from 'react';
import { BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {
    const students = [
        { name: "Alice Smith", physics: 33, math: 85, english: 95 },
        { name: "John Lee", physics: 80, math: 90, english: 75 },
        { name: "Sarah Brown", physics: 45, math: 92, english: 85 },
        { name: "Michael Chen", physics: 97, math: 68, english: 89 },
        { name: "Emily Davis", physics: 70, math: 80, english: 90 },
        { name: "David Kim", physics: 92, math: 87, english: 84 },
        { name: "Samantha Lee", physics: 85, math: 55, english: 88 },
    ];
    return (
        <div style={{ width: '99%', height: '100%' }}>
            {/* <ResponsiveContainer width="50%" height="100%">

                <LineChart
                    width={800}
                    height={500}
                    margin={{
                        top: 50
                    }}
                    data={students}
                >
                    <Line dataKey="physics"></Line>
                    <Line dataKey="math"></Line>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer> */}

            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={800} height={400} data={students}>
                    <Bar dataKey="english" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={students}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="physics" fill="#8884d8" />
                    <Bar dataKey="math" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Charts;