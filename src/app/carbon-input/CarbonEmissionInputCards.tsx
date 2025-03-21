import React, {useState} from "react";

function CarbonEmissionInputCards() {
    return (
        <section className="grid gap-6 grid-cols-3 max-md:grid-cols-[1fr] max-sm:gap-4">
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

    const [selectedScope, setSelectedScope] = useState("");

    const handleScopeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newScope = event.target.value;
        setSelectedScope(newScope);
    };

    const renderFormFields = () => {
        switch (selectedScope) {
            case "Scope 1":
                return <InputCarbon label="Enter electricity usage (kWh)" />;
            case "Scope 2":
                return <InputCarbon label="Enter gas usage (m3)" />;
            case "Scope 3":
                return <InputCarbon label="Enter waste amount (kg)" />;
            default:
                return <p>Select a valid source type</p>;
        }
    };

    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <h3 className="text-2xl font-semibold">Carbon Emission Calculator</h3>
            <ul className="flex flex-col gap-4 mt-5 ">
                <div className="mb-4">
                    <select
                        value={selectedScope}
                        onChange={handleScopeChange} // `onChange` is disabled since it's static, but you can remove it if you don't need it
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
        </article>
    )
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputCarbon: React.FC<InputProps> = ({ label, className, ...props }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <input
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
        </div>
    );
};

export default CarbonEmissionInputCards;