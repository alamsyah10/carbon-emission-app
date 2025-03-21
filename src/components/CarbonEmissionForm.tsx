"use client";

import Button from "./Button";
import { InputCarbon } from "./InputCarbon";
import { Card, CardContent } from "./Card";
import { Select } from "./Select";

export default function CarbonEmissionForm() {
    const sourceTypes = [
        { id: 1, name: "Electricity" },
        { id: 2, name: "Gas" },
        { id: 3, name: "Waste" },
    ];

    const selectedSource = sourceTypes[0].name;
    const error = "";

    const renderFormFields = () => {
        switch (selectedSource) {
            case "Electricity":
                return <InputCarbon label="Enter electricity usage (kWh)" />;
            case "Gas":
                return <InputCarbon label="Enter gas usage (m3)" />;
            case "Waste":
                return <InputCarbon label="Enter waste amount (kg)" />;
            default:
                return <p>Select a valid source type</p>;
        }
    };

    const handleSubmit = () => {
        console.log("Emission calculated!");
    };

    return (
        <>
            <section className="grid gap-6 grid-cols-1 max-md:grid-cols-[1fr] max-sm:gap-4">
                <article className="p-6 bg-white rounded-3xl">
                    <div className="flex items-center ">
                        <Card className="w-96 p-6 shadow-lg bg-white rounded-xl">
                            <h2 className="text-2xl font-bold text-center mb-4">Carbon Emission Calculator</h2>
                            <CardContent>
                                <div className="mb-4">
                                    <select
                                        value={selectedSource}
                                        // `onChange` is disabled since it's static, but you can remove it if you don't need it
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Source Type</option>
                                        {sourceTypes.map((source) => (
                                            <option key={source.id} value={source.name}>
                                                {source.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {renderFormFields()}

                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <Button
                                    onClick={handleSubmit}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                                >
                                    Calculate Emission
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </article>
            </section>
        </>
        
    );
}
