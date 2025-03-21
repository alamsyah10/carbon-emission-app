"use client";
import * as React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import SupplyChainCards from "./SupplyChainCards";

function SupplyChainPage() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
                rel="stylesheet"
            />
            <div className="flex min-h-screen bg-slate-50">
                <Sidebar />
                <main className="flex-1 px-8 py-5">
                    <DashboardHeader />
                    <h1 className="mb-8 text-2xl font-semibold">Supply Chain Carbon Footprint</h1>
                    <SupplyChainCards />
                </main>
            </div>
        </>
    );
}

export default SupplyChainPage;
