import * as React from "react";
import { BarChartComponent, BarChartComponentProps, CarbonFootprintData } from "../components/ChartComponents";

export interface MonthlyCarbonFootprinthGraphProps {
    className: string;
    data: CarbonFootprintData[];
}

export function MonthlyCarbonFootprinthGraph({className="", data} : MonthlyCarbonFootprinthGraphProps) {
    const totalTCO2e = data.reduce((acc, data) => acc + data.tCO2e, 0);
    const lastMonthData = data[data.length - 1];  // December data
    const secondLastMonthData = data[data.length - 2]; // November data

    const percentageDifference = ((lastMonthData.tCO2e - secondLastMonthData.tCO2e) / secondLastMonthData.tCO2e) * 100;
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                <div>
                    <h3 className="text-2xl font-semibold">{`This Month: ${lastMonthData.tCO2e} tCO2e`}</h3>
                    <p className={`mt-2 text-sm ${percentageDifference >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {percentageDifference > 0
                        ? `+${percentageDifference.toFixed(2)}% vs last month`
                        : `${percentageDifference.toFixed(2)}% vs last month`}
                    </p>
                    <p className="mt-1 text-sm text-slate-400"> Carbon footprint this year </p>
                </div>
            </div>
            <div className="size-full">
                <BarChartComponent data={data}/>
            </div>
        </article>
    );
}