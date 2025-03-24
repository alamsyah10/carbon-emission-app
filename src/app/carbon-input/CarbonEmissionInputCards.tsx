import React, {useState} from "react";
import SupplyChainForm from "./SupplyChainForm";
import DeliveriesForm from "./DeliveriesForm";

function CarbonEmissionInputCards() {
    return (
        <section className="grid gap-6 grid-cols-1 max-md:grid-cols-[1fr] max-sm:gap-4">
            <CarbonEmissionForm className="col-span-1" />
        </section>
    );
}

function CarbonEmissionForm({className=""}) {
    const scopeList = [
        { id: 1, name: "Scope 1" },
        { id: 2, name: "Scope 2" },
        { id: 3, name: "Scope 3" }
    ]

    const scope3SouceList = [
        {id: 1, name: "Supply Chain"},
        {id: 2, name: "Travel"},
        {id: 3, name: "Deliveries"},
        {id: 4, name: "Waste"},
        {id: 5, name: "Others"}
    ];

    const [selectedScope, setSelectedScope] = useState("");
    const [selectedSourceType, setSelectedSourceType] = useState("");

    const handleScopeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newScope = event.target.value;
        setSelectedScope(newScope);
        setSelectedSourceType("");
    };

    const renderFormFields = () => {
        switch (selectedScope) {
            case "Scope 1":
                return (
                    <div>
                        This has not been implemented yet.
                    </div>    
                )
            case "Scope 2":
                return (
                    <div>
                        This has not been implemented yet.
                    </div>    
                )
            case "Scope 3":
                return <InputCarbon selectedSourceType={selectedSourceType} setSelectedSourceType={setSelectedSourceType} sourceList={scope3SouceList} label="Select the carbon emission source type." />;
            default:
                return <p>Select a valid scope</p>;
        }
    };

    const renderCarbonEmissionFields = () => {
        switch (selectedSourceType) {
            case "Supply Chain":
                return (
                    <SupplyChainForm />
                )
            case "Deliveries":
                return (
                    <DeliveriesForm />   
                )
            case "Travel":
                return (
                    <div>
                        This has not been implemented yet.
                    </div>    
                )
        }
    };

    return (
        <section className="grid gap-6 grid-cols-2 max-md:grid-cols-[1fr] max-sm:gap-4">
            <article className={`p-6 bg-white rounded-3xl`}>
                <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                    <div>
                        <h3 className="text-2xl font-semibold">Carbon Emission Calculator</h3>
                        <ul className="flex flex-col gap-4 mt-5 ">
                            <div className="mb-4">
                                <select
                                    value={selectedScope}
                                    onChange={handleScopeChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select Scope</option>
                                    {scopeList.map((source) => (
                                        <option key={source.id} value={source.name}>
                                            {source.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {renderFormFields()}
                            
                        </ul>
                    </div>
                </div>
            </article>
            <article className={`p-6 bg-white rounded-3xl`}>
                <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                    {renderCarbonEmissionFields()}
                </div>
            </article>
        </section>
    )
}

interface SourceType {
    id: number;
    name: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    selectedSourceType?: string;
    setSelectedSourceType: React.Dispatch<React.SetStateAction<string>>;
    sourceList: SourceType[];
}

export const InputCarbon: React.FC<InputProps> = ({ label, selectedSourceType, setSelectedSourceType, sourceList, className, ...props }) => {
    const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSource = event.target.value;
        setSelectedSourceType(newSource);
    };

    return (
        <div className={`flex ${className} items-center`}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div className="mb-4">
                <select
                    value={selectedSourceType}
                    onChange={handleSourceChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Source</option>
                    {sourceList.map((source) => (
                        <option key={source.id} value={source.name}>
                            {source.name}
                        </option>
                    ))}
                </select>
            </div>

        </div>

    );
};

export default CarbonEmissionInputCards;