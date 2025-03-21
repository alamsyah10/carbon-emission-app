import * as React from "react";

export interface CarbonContributionScopeItemProps {
    name: string;
    amount: number;
    percentage: string;
}

interface CarbonContributionBySourceProps {
    className: string;
    items: CarbonContributionScopeItemProps[];
}

export function CarbonContributionBySource({className = "", items }: CarbonContributionBySourceProps) {
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <h3 className="text-2xl font-semibold">Carbon Contribution by Source</h3>
            <ul className="flex flex-col gap-4 mt-5 ">
                <li className="flex justify-between items-center gap-4 w-full bg-blue-100 p-1">
                    <div className="w-1/3 text-left">
                        <h4 className="font-medium font-semibold">Source Type</h4>
                    </div>
                    <div className="w-1/3 text-center">
                        <h4 className="font-medium text-left font-semibold">tCO2e</h4>
                    </div>
                    <div className="w-1/3 text-right">
                        <h4 className="font-medium text-left font-semibold">%</h4>
                    </div>
                </li>
                {items.map((item, index) => (
                    <CarbonContributionScopeItem
                        key={index}
                        name={item.name}
                        amount={item.amount}
                        percentage={item.percentage}
                    />
                ))}
            </ul>
        </article>
    )
}

function CarbonContributionScopeItem({ name, amount, percentage }: CarbonContributionScopeItemProps) {
    return (
        <li className="flex justify-between items-center gap-4 w-full">
            <div className="w-1/3 text-left">
                <h4 className="font-medium">{name}</h4>
            </div>
            <div className="w-1/3 text-center">
                <h4 className="font-medium text-left">{amount}</h4>
            </div>
            <div className="w-1/3 text-right">
                <h4 className="font-medium text-left">{percentage}</h4>
            </div>
        </li>
    );
}