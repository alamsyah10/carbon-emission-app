"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, LabelList } from "recharts";

// Sample Data
const data = [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
];

export interface SupplyChainCarbonFootprintData {
    name: string;
    "Scope 1": number;
    "Scope 2": number;
    "Scope 3": number;
    "Total": number;
    "Spends": string;
}

export interface SupplyChainBarChartComponentProps {
    data: SupplyChainCarbonFootprintData[];
}

export const SupplyChainBarChartComponent: React.FC<SupplyChainBarChartComponentProps> = ({data}: SupplyChainBarChartComponentProps) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const total = payload[0] ? payload[0].payload["Total"] : 0;
                const spends = payload[0] ? payload[0].payload["Spends"] : 0;
                console.log("spends", spends);
                return (
                    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Carbon Footprint Details</h4>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Scope 1</span>
                                <span className="text-gray-800">{payload[0].payload["Scope 1"]} tCO2e</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Scope 2</span>
                                <span className="text-gray-800">{payload[0].payload["Scope 2"]} tCO2e</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Scope 3</span>
                                <span className="text-gray-800">{payload[0].payload["Scope 3"]} tCO2e</span>
                            </div>
                            <div className="border-t border-gray-300 mt-2 pt-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Total</span>
                                    <span className="text-gray-800 font-semibold">{total} tCO2e</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Spends</span>
                                    <span className="text-gray-800 font-semibold">{spends}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }} />
            <Legend />
            <Bar dataKey="Scope 1" fill="#cc5856" />
            <Bar dataKey="Scope 2" fill="#5559c9" />
            <Bar dataKey="Scope 3" fill="#56bf4e" />
        </BarChart>
    </ResponsiveContainer>
);

export interface CarbonFootprintData {
    name: string;   // e.g., "Jan", "Feb", etc.
    tCO2e: number;  // The carbon emissions in tCO2e
}
export interface BarChartComponentProps {
     data: CarbonFootprintData[];
}

const pieData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Bar Chart Component
export const BarChartComponent: React.FC<BarChartComponentProps> = ({data}: BarChartComponentProps) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tCO2e" fill="#8884d8" />
            {/*<Bar dataKey="revenue" fill="#82ca9d" />*/}
        </BarChart>
    </ResponsiveContainer>
);

// Line Chart Component
export const LineChartComponent: React.FC = () => (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
);

// Pie Chart Component
export const PieChartComponent: React.FC = () => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
);
