import { useState } from "react";

interface Courier {
    courier_company: string;
    total_package_units: number;
}

interface TonneKm {
    vehicle_type: string;
    fuel_type: string;
    weight: number;
    distance: number;
}

interface DistanceOnly {
    vehicle_type: string;
    fuel_type: string;
    distance: number;
    distance_unit: string;
}

interface TripData {
    delivery_type: "courier" | "tonne_km" | "distance";
    courier?: Courier | null;
    tonne_km?: TonneKm | null;
    distance_only?: DistanceOnly | null;
}

const DeliveriesForm: React.FC = () => {
    const [emissionDate, setEmissionDate] = useState<string>("");
    const [origin, setOrigin] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [tripData, setTripData] = useState<TripData[]>([]);

    const addTrip = () => {
        setTripData([
            ...tripData,
            {
                delivery_type: "courier",
                courier: { courier_company: "", total_package_units: 0 },
                tonne_km: null,
                distance_only: null
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
        field: keyof TripData,
        value: any
    ) => {
        const updatedTrips = [...tripData];
        if (value === "courier") {
            updatedTrips[index] = {
                delivery_type: value,
                courier: {courier_company: "", total_package_units: 0},
                tonne_km: null,
                distance_only: null
            }
        } else if (value === "tonne_km") {
            updatedTrips[index] = {
                delivery_type: value,
                courier: null,
                tonne_km: {vehicle_type: "", fuel_type: "", weight: 0, distance: 0},
                distance_only: null
            }
        } else if (value === "distance") {
            updatedTrips[index] = {
                delivery_type: value,
                distance_only: {vehicle_type: "", fuel_type: "", distance_unit: "", distance: 0},
                tonne_km: null,
                courier: null
            }
        }
        setTripData(updatedTrips);
    };

    const handleFieldChange = (
        index: number,
        section: keyof TripData,
        field: string,
        value: any
    ) => {
        const updatedTrips = [...tripData];
        if (updatedTrips[index][section]) {
            (updatedTrips[index][section] as any)[field] = value;
        }

        setTripData(updatedTrips);
    };

    const handleSubmit = () => {
        const payload = {
            source_type: "deliveries",
            emission_date: emissionDate,
            origin,
            destination,
            trip_data: tripData
        };
        console.log("Payload:", JSON.stringify(payload, null, 2));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Deliveries Form</h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium">Emission Date</label>
                    <input
                        type="date"
                        value={emissionDate}
                        onChange={(e) => setEmissionDate(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Origin</label>
                    <input
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Destination</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
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

                        {/* Select Delivery Type */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium">Delivery Type</label>
                            <select
                                value={trip.delivery_type}
                                onChange={(e) => handleTripChange(index, "delivery_type", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="courier">Courier</option>
                                <option value="tonne_km">Tonne Km</option>
                                <option value="distance">Distance Only</option>
                            </select>
                        </div>

                        {trip.delivery_type === "distance" && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium">Vehicle Type</label>
                                    <input
                                        type="text"
                                        value={trip.distance_only?.vehicle_type || ""}
                                        onChange={(e) => handleFieldChange(index, "distance_only", "vehicle_type", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Fuel Type</label>
                                    <input
                                        type="text"
                                        value={trip.distance_only?.fuel_type || ""}
                                        onChange={(e) => handleFieldChange(index, "distance_only", "fuel_type", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Distance Unit</label>
                                    <select
                                        value={trip.distance_only?.distance_unit || ""}
                                        onChange={(e) => handleFieldChange(index, "distance_only", "distance_unit", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    >
                                        <option value="miles">Miles</option>
                                        <option value="km">Kilometers</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Total Distance</label>
                                    <input
                                        type="number"
                                        value={trip.distance_only?.distance || 0}
                                        onChange={(e) => handleFieldChange(index, "distance_only", "distance", Number(e.target.value))}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            </div> 
                        )}

                        {trip.delivery_type === "courier" && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium">Courier Company</label>
                                    <input
                                        type="text"
                                        value={trip.courier?.courier_company || ""}
                                        onChange={(e) => handleFieldChange(index, "courier", "courier_company", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Total Package Units</label>
                                    <input
                                        type="number"
                                        value={trip.courier?.total_package_units || 0}
                                        onChange={(e) => handleFieldChange(index, "courier", "total_package_units", Number(e.target.value))}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                        )}

                        {trip.delivery_type === "tonne_km" && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium">Vehicle Type</label>
                                    <input
                                        type="text"
                                        value={trip.tonne_km?.vehicle_type || ""}
                                        onChange={(e) => handleFieldChange(index, "tonne_km", "vehicle_type", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Fuel Type</label>
                                    <input
                                        type="text"
                                        value={trip.tonne_km?.fuel_type || ""}
                                        onChange={(e) => handleFieldChange(index, "tonne_km", "fuel_type", e.target.value)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Weight (tonnes)</label>
                                    <input
                                        type="number"
                                        value={trip.tonne_km?.weight || 0}
                                        onChange={(e) => handleFieldChange(index, "tonne_km", "weight", Number(e.target.value))}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Distance</label>
                                    <input
                                        type="number"
                                        value={trip.tonne_km?.distance || 0}
                                        onChange={(e) => handleFieldChange(index, "tonne_km", "distance", Number(e.target.value))}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-6">
                <button onClick={addTrip} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Trip</button>
                <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
            </div>
        </div>
    );
};

export default DeliveriesForm;
