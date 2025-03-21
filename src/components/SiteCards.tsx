import * as React from "react";
import { useRouter } from "next/navigation";

const sitesIcon = "/icons/sitesIcon.png";

export interface SitesItemProps {
    label: string;
    url: string;
}

export interface SitesCardProps {
    className: string;
    items: SitesItemProps[];
}

function SitesItem({ label, url }: SitesItemProps) {
    const router = useRouter();

    const handleSitelick = () => {
        router.push("/sites"+ url);
    }

    return (
        <div className="flex flex-col justify-center items-center text-black cursor-pointer duration-[0.3s]  ease-[ease] hover:filter hover:brightness-50" onClick={handleSitelick}>
            <img
                src={sitesIcon}
                alt={label}
                className="mb-2"
                style={{ width: '100px', height: '100px' }}
            />

            <div className="text-xl font-semibold">{label}</div>
        </div>
    );
}

export function SitesCard({className="", items} : SitesCardProps) {
    return (
        <article className="p-6 bg-white rounded-3xl">
            <h3 className="text-2xl font-semibold text-center bg-blue-100 text-black p-1">Sites</h3>
            <div className="flex gap-12  mt-8">
                {items.map((item, index) => (
                    <SitesItem
                        key={index}
                        label={item.label}
                        url={item.url}
                    />
                ))}
            </div>
        </article>
    );
}