import * as React from "react";
import { SupplyChainBarChartComponent, SupplyChainCarbonFootprintData } from "../components/ChartComponents";

export interface SupplyChainCarbonFootprintGraphProps {
    className: string;
    data: SupplyChainCarbonFootprintData[];
}

export function SupplyChainCarbonFootprintGraph({className="", data} : SupplyChainCarbonFootprintGraphProps) {
    const totalTCO2e = 0;
    // data.reduce((acc, data) => acc + data.tCO2e, 0);
    const lastMonthData = data[data.length - 1];  // December data
    const secondLastMonthData = data[data.length - 2]; // November data

    const percentageDifference =  ((lastMonthData.Total - secondLastMonthData.Total) / secondLastMonthData.Total) * 100;
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                <div>
                    <h3 className="text-2xl font-semibold">Monthly Emission from Supplier</h3>
                    <p className={`mt-2 text-sm ${percentageDifference >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {percentageDifference > 0
                        ? `Total: +${percentageDifference.toFixed(2)}% vs last month`
                        : `Total: ${percentageDifference.toFixed(2)}% vs last month`}
                    </p>
                    <p className="mt-1 text-sm text-slate-400"> Carbon footprint this year </p>
                </div>
            </div>
            <div className="size-full">
                <SupplyChainBarChartComponent data={data}/>
            </div>
        </article>
    );
}