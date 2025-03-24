import { useState } from "react";

interface Wholesaler {
    store_name: string;
    spends_per_year: number;
    carbon_footprint_per_annum: number;
    turnover_per_annum: number;
}

interface Local {
    item_purchased: number;
    emission_per_unit: number;
    item_unit: string;
}

interface TripData {
    product_name: string;
    wholesaler?: Wholesaler | null;
    local?: Local | null;
}

const SupplyChainForm: React.FC = () => {
    const [emissionDate, setEmissionDate] = useState<string>("");
    const [tripData, setTripData] = useState<TripData[]>([]);

    const addTrip = () => {
        setTripData([
            ...tripData,
            {
                product_name: "",
                wholesaler: {
                    store_name: "",
                    spends_per_year: 0,
                    carbon_footprint_per_annum: 0,
                    turnover_per_annum: 0
                },
                local: {
                    item_purchased: 0,
                    emission_per_unit: 0,
                    item_unit: ""
                }
            }
        ]);
    };

    const removeTrip = (index: number) => {
        const updatedTrips = [...tripData];
        updatedTrips.splice(index, 1);
        setTripData(updatedTrips);
    };

    const handleTripChange = (
        index: number,
        field: string,
        value: any,
        isLocal: boolean = false
    ) => {
        const updatedTrips = [...tripData];
        if (field === "product_name") {
            updatedTrips[index][field] = value;
        } else if (isLocal && updatedTrips[index].local) {
            (updatedTrips[index].local as any)[field] = value;
        } else if (!isLocal && updatedTrips[index].wholesaler) {
            (updatedTrips[index].wholesaler as any)[field] = value;
        }

        setTripData(updatedTrips);
    };

    const handleSubmit = () => {
        const payload = {
            source_type: "supply chain",
            emission_date: emissionDate,
            trip_data: tripData
        };
        console.log("Payload:", JSON.stringify(payload, null, 2));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Supply Chain Form</h2>

            {/* Emission Date Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Emission Date</label>
                <input
                    type="date"
                    value={emissionDate}
                    onChange={(e) => setEmissionDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-6">
                {tripData.map((trip, index) => (
                    <div key={index} className="border p-4 rounded-lg bg-gray-50">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Trip {index + 1}</h3>
                            <button
                                onClick={() => removeTrip(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {/* Product Name */}
                            <div>
                                <label className="block text-sm font-medium">Product Name</label>
                                <input
                                    type="text"
                                    value={trip.product_name || ""}
                                    onChange={(e) => handleTripChange(index, "product_name", e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            {/* Wholesaler Fields */}
                            <div>
                                <label className="block text-sm font-medium">Wholesaler - Store Name</label>
                                <input
                                    type="text"
                                    value={trip.wholesaler?.store_name || ""}
                                    onChange={(e) => handleTripChange(index, "store_name", e.target.value)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Spends Per Year</label>
                                <input
                                    type="number"
                                    value={trip.wholesaler?.spends_per_year || 0}
                                    onChange={(e) => handleTripChange(index, "spends_per_year", Number(e.target.value))}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Carbon Footprint Per Annum</label>
                                <input
                                    type="number"
                                    value={trip.wholesaler?.carbon_footprint_per_annum || 0}
                                    onChange={(e) => handleTripChange(index, "carbon_footprint_per_annum", Number(e.target.value))}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Turnover Per Annum</label>
                                <input
                                    type="number"
                                    value={trip.wholesaler?.turnover_per_annum || 0}
                                    onChange={(e) => handleTripChange(index, "turnover_per_annum", Number(e.target.value))}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            {/* Local Fields */}
                            <div>
                                <label className="block text-sm font-medium">Local - Item Purchased</label>
                                <input
                                    type="number"
                                    value={trip.local?.item_purchased || 0}
                                    onChange={(e) => handleTripChange(index, "item_purchased", Number(e.target.value), true)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Emission Per Unit</label>
                                <input
                                    type="number"
                                    value={trip.local?.emission_per_unit || 0}
                                    onChange={(e) => handleTripChange(index, "emission_per_unit", Number(e.target.value), true)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Item Unit</label>
                                <input
                                    type="text"
                                    value={trip.local?.item_unit || ""}
                                    onChange={(e) => handleTripChange(index, "item_unit", e.target.value, true)}
                                    className="w-full border rounded px-3 py-2"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={addTrip}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Trip
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SupplyChainForm;
