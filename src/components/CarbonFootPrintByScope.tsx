import * as React from "react";

export interface ScopeItemProps {
    name: string;
    amount: number;
    desc: string;
}

interface CarbonContributionBySourceProps {
    className: string;
    items: ScopeItemProps[];
}

export function CarbonFootPrintByScope({className = "", items} : CarbonContributionBySourceProps) {
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <h3 className="text-2xl font-semibold">Carbon Footprint (tCO2e)</h3>
            <ul className="flex flex-col gap-4 mt-5">
                {items.map((item, index) => (
                    <ScopeItem
                        key={index}
                        name={item.name}
                        amount={item.amount}
                        desc={item.desc}
                    />
                ))}
            </ul>
        </article>    
    )
}

function ScopeItem({ name, amount, desc }: ScopeItemProps) {
    return (
        <li className="flex gap-4 items-center">
            <div className="flex flex-col gap-1">
                <h4 className="font-medium">{name}</h4>
                <p className="text-sm text-slate-400">{desc}</p>
            </div>
            <p className="text-sm text-slate-400 ml-auto">{amount}</p> 
        </li>
    );
}