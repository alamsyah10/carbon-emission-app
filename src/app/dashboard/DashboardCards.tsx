import * as React from "react";
import { BarChartComponent, LineChartComponent, PieChartComponent } from "../../components/ChartComponents";
import { CarbonContributionBySource, CarbonContributionScopeItemProps } from "../../components/CarbonContributionBySource";
import { CarbonFootPrintByScope, ScopeItemProps } from "../../components/CarbonFootPrintByScope";
import { MonthlyCarbonFootprinthGraph } from "../../components/MonthlyCarbonFootprinthGraph";
import { CarbonFootprintData } from "../../components/ChartComponents";
import { SitesCard, SitesItemProps } from "../../components/SiteCards";

import Image from "next/image";

const sitesIcon = "/icons/sitesIcon.png";

function DashboardCards() {
    const carbonContributionItems: CarbonContributionScopeItemProps[] = [
        {
            name: "Electricity",
            amount: 5623,
            percentage: "23%",
        },
        {
            name: "Gas",
            amount: 34,
            percentage: "2%",
        },
        {
            name: "Waste",
            amount: 5,
            percentage: "1%",
        },
    ];

    const carbonFootprintByScopeItems: ScopeItemProps[] = [
        {
            name: "Scope 1",
            amount: 241,
            desc: "Fuel you burn directly.",
        },
        {
            name: "Scope 2",
            amount: 535,
            desc: "Electricity.",
        },
        {
            name: "Scope 3",
            amount: 643,
            desc: "Indirect emissions.",
        },
        {
            name: "Total",
            amount: 1419,
            desc: "Total for all scope.",
        },
    ];

    const monthlyCarbonFootprintData: CarbonFootprintData[] = [
        { name: "Jan", tCO2e: 402 },
        { name: "Feb", tCO2e: 202 },
        { name: "Mar", tCO2e: 245 },
        { name: "Apr", tCO2e: 235 },
        { name: "May", tCO2e: 199 },
        { name: "Jun", tCO2e: 175 },
        { name: "Jul", tCO2e: 195 },
        { name: "Aug", tCO2e: 170 },
        { name: "Sep", tCO2e: 145 },
        { name: "Oct", tCO2e: 145 },
        { name: "Nov", tCO2e: 105 },
        { name: "Dec", tCO2e: 85 }
    ];

    const sitesCardItems: SitesItemProps[] = [
        {
            label: "東京",
            url: "/tokyo"
        },
        {
            label: "熊本",
            url: "/kumamoto"
        },
        {
            label: "静岡",
            url: "/shizuoka"
        },
    ];

    return (
        <>
            <section className="grid gap-6 grid-cols-8 max-md:grid-cols-[1fr] max-sm:gap-4">
                <CarbonFootPrintByScope className="col-span-2" items={carbonFootprintByScopeItems}/>
                <MonthlyCarbonFootprinthGraph className="col-span-4" data={monthlyCarbonFootprintData}/>
                <TeamCards className="col-span-2"/>
            </section>
            
            <section className="grid gap-6 grid-cols-1 max-md:grid-cols-[1fr] max-sm:gap-4">
                <SitesCard className="" items={sitesCardItems}/>
            </section>

            <section className="grid gap-6 grid-cols-2 max-md:grid-cols-[1fr] max-sm:gap-4">
                <CarbonContributionBySource className="" items={carbonContributionItems}/>
                <CarbonContributionBySource className="" items={[]}/>
            </section>

        </>
        
    );
}

function TeamCards({className = ""}) {
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <h3 className="text-2xl font-semibold">Team</h3>
            <ul className="flex flex-col gap-4 mt-5">
                
            </ul>
        </article>    
    )
}
{/*
function SalesCard({className=""}) {
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                <div>
                    <h3 className="text-2xl font-semibold">IDR 7.852.000</h3>
                    <p className="mt-2 text-sm">2.1% vs last week</p>
                    <p className="mt-1 text-sm text-slate-400"> Sales from 1-12 Dec, 2020 </p>
                </div>
                <button className="text-sm text-indigo-600 cursor-pointer max-sm:mt-2.5">
                    View Report
                </button>
            </div>
            <div className="size-full">
                <BarChartComponent />
                <div className="flex gap-5 mt-5">
                    <ChartLegend color="bg-indigo-500" label="Last 6 days" />
                    <ChartLegend color="bg-slate-300" label="Last Week" />
                </div>
            </div>
        </article>
    );
}

function OrderTimeCard() {
    return (
        <article className="p-6 bg-white rounded-3xl">
            <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                <h3>Order Time</h3>
                <button className="text-sm text-indigo-600 cursor-pointer max-sm:mt-2.5">
                    View Report
                </button>
            </div>
            <p className="mt-1 text-sm text-slate-400">From 1-6 Dec, 2020</p>
            <div className="relative mx-auto my-8 rounded-full h-[200px] w-[200px]">
                <PieChartComponent />
                <div className="absolute top-2/4 left-2/4 bg-white rounded-full -translate-x-2/4 -translate-y-2/4 h-[120px] w-[120px]" />
                <div className="absolute top-2/4 left-2/4 text-center -translate-x-2/4 -translate-y-2/4">
                    <h4 className="font-semibold">Afternoon</h4>
                    <p className="text-sm text-slate-400">1pm - 4pm</p>
                    <p className="mt-1 text-sm">1.890 orders</p>
                </div>
            </div>
            <div className="flex gap-5 mt-5">
                <TimeDistribution
                    color="bg-indigo-500"
                    label="Afternoon"
                    percentage="40%"
                />
                <TimeDistribution
                    color="bg-emerald-500"
                    label="Evening"
                    percentage="32%"
                />
                <TimeDistribution
                    color="bg-amber-500"
                    label="Morning"
                    percentage="28%"
                />
            </div>
        </article>
    );
}

function RatingCard() {
    return (
        <article className="p-6 bg-white rounded-3xl">
            <h3>Your Rating</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <div className="flex gap-5 justify-center mt-8">
                <RatingCircle
                    percentage="85%"
                    label="Food Taste"
                    color="bg-indigo-600"
                />
                <RatingCircle percentage="85%" label="Hygiene" color="bg-emerald-600" />
                <RatingCircle percentage="92%" label="Packaging" color="bg-amber-600" />
            </div>
        </article>
    );
}

function MostOrderedFoodCard() {
    return (
        <article className="p-6 bg-white rounded-3xl">
            <h3>Most Ordered Food</h3>
            <p>Adipiscing elit, sed do eiusmod tempor</p>
            <ul className="flex flex-col gap-4 mt-5">
                <FoodItem
                    imageUrl="https://placehold.co/40x40/8a9b0f/8a9b0f"
                    name="Fresh Salad Bowl"
                    price="IDR 45.000"
                />
                <FoodItem
                    imageUrl="https://placehold.co/40x40/c4a484/c4a484"
                    name="Chicken Noodles"
                    price="IDR 75.000"
                />
                <FoodItem
                    imageUrl="https://placehold.co/40x40/ff69b4/ff69b4"
                    name="Smoothie Fruits"
                    price="IDR 45.000"
                />
                <FoodItem
                    imageUrl="https://placehold.co/40x40/cd853f/cd853f"
                    name="Hot Chicken Wings"
                    price="IDR 45.000"
                />
            </ul>
        </article>
    );
}

function OrderStatisticsCard() {
    return (
        <article className="p-6 bg-white rounded-3xl">
            <div className="flex justify-between items-start mb-5 max-sm:flex-col max-sm:gap-2.5">
                <div>
                    <h3 className="text-2xl font-semibold">2.568</h3>
                    <p className="mt-2 text-sm">2.1% vs last week</p>
                    <p className="mt-1 text-sm text-slate-400">
                    Sales from 1-6 Dec, 2020
                    </p>
                </div>
                <button className="text-sm text-indigo-600 cursor-pointer max-sm:mt-2.5">
                    View Report
                </button>
            </div>
            <div className="mt-8 h-[200px]">
                <LineChartComponent />
            </div>
            <div className="flex gap-5 mt-5">
                <ChartLegend color="bg-indigo-500" label="Last 6 days" />
                <ChartLegend color="bg-slate-300" label="Last Week" />
            </div>
        </article>
    );
}

interface FoodItemProps {
    imageUrl: string;
    name: string;
    price: string;
}

function FoodItem({ imageUrl, name, price }: FoodItemProps) {
    return (
        <li className="flex gap-4 items-center">
            <img
                src={imageUrl}
                alt=""
                className="object-cover w-10 h-10 rounded-lg"
            />
            <div className="flex flex-col gap-1">
                <h4 className="font-medium">{name}</h4>
                <p className="text-sm text-slate-400">{price}</p>
            </div>
        </li>
    );
}

interface ChartLegendProps {
    color: string;
    label: string;
}

function ChartLegend({ color, label }: ChartLegendProps) {
    return (
        <div className="flex gap-2 items-center text-sm">
            <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
            <span>{label}</span>
        </div>
    );
}

interface TimeDistributionProps {
    color: string;
    label: string;
    percentage: string;
}

function TimeDistribution({ color, label, percentage }: TimeDistributionProps) {
    return (
        <div className="flex gap-2 items-center text-sm">
            <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
            <div className="text-xs">{label}</div>
            <div className="text-2xl font-semibold">{percentage}</div>
        </div>
    );
}

interface RatingCircleProps {
    percentage: string;
    label: string;
    color: string;
}

function RatingCircle({ percentage, label, color }: RatingCircleProps) {
    return (
        <div className={`flex flex-col justify-center items-center text-white rounded-full h-[120px] w-[120px] ${color}`}>
            <div className="text-2xl font-semibold">{percentage}</div>
            <div className="text-xs">{label}</div>
        </div>
    );
}
*/}
export default DashboardCards;
