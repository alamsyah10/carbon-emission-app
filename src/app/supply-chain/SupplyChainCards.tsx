import * as React from "react";
import { SupplyChainCarbonFootprintGraph } from "../../components/SupplyChainCarbonFootprintGraph";
import { SupplyChainCarbonFootprintData } from "../../components/ChartComponents";

export default function SupplyChainCards() {

    const supplyChainData = [
        { name: "Jan", "Scope 1": 250, "Scope 2": 300, "Scope 3": 120, "Total": 670 },
        { name: "Feb", "Scope 1": 450, "Scope 2": 150, "Scope 3": 180, "Total": 700 },
        { name: "Mar", "Scope 1": 310, "Scope 2": 180, "Scope 3": 100, "Total": 590 },
        { name: "Apr", "Scope 1": 380, "Scope 2": 220, "Scope 3": 240, "Total": 840 },
        { name: "May", "Scope 1": 420, "Scope 2": 190, "Scope 3": 210, "Total": 820 },
        { name: "Jun", "Scope 1": 360, "Scope 2": 250, "Scope 3": 160, "Total": 770 },
        { name: "Jul", "Scope 1": 200, "Scope 2": 270, "Scope 3": 130, "Total": 600 },
        { name: "Aug", "Scope 1": 380, "Scope 2": 300, "Scope 3": 90, "Total": 770 },
        { name: "Sep", "Scope 1": 330, "Scope 2": 230, "Scope 3": 150, "Total": 710 },
        { name: "Oct", "Scope 1": 460, "Scope 2": 150, "Scope 3": 190, "Total": 800 },
        { name: "Nov", "Scope 1": 290, "Scope 2": 180, "Scope 3": 130, "Total": 600 },
        { name: "Dec", "Scope 1": 310, "Scope 2": 220, "Scope 3": 200, "Total": 730 }
    ];

    return (
        <>
            <section className="grid gap-6 grid-cols-6 max-md:grid-cols-[1fr] max-sm:gap-4">
                <SupplyChainCarbonFootprintGraph className="col-span-6" data={supplyChainData}/>
            </section>
            
            <section className="grid gap-6 grid-cols-1 max-md:grid-cols-[1fr] max-sm:gap-4">
            </section>

            <section className="grid gap-6 grid-cols-2 max-md:grid-cols-[1fr] max-sm:gap-4">
            </section>

        </>
        
    );
}
