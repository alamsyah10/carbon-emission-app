import * as React from "react";
import { useRouter } from "next/navigation";  // Import the Next.js useRouter hook

function Sidebar() {
    return (
        <nav className="flex flex-col gap-8 p-5 w-60 bg-white max-md:w-[200px] max-sm:hidden">
            <h2 className="text-lg font-semibold text-indigo-600">GX Carbon</h2>
            <div className="flex flex-col gap-2">
                <NavItem to="/dashboard" icon="dashboard" label="Home" />
                <NavItem to="/carbon-input" icon="shopping-cart" label="Carbon Input" />
                <NavItem to="/supply-chain" icon="menu-2" label="Supply Chain" />
                <NavItem to="/customer-review" icon="message-circle" label="Waste" />
                <NavItem to="/customer-review" icon="message-circle" label="Travel" />
                <NavItem to="/customer-review" icon="message-circle" label="Other Emission" />

                <div className="mt-5 mb-2.5 text-xs text-slate-400">OTHERS</div>

                <NavItem to="/settings" icon="settings" label="Targets" />
                <NavItem to="/payment" icon="credit-card" label="Report" />
                <NavItem to="/accounts" icon="users" label="Certified" />
                <NavItem to="/help" icon="help" label="Help" />
            </div>
        </nav>
    );
}

interface NavItemProps {
    to: string; // New `to` prop for routing
    icon: string;
    label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
    const router = useRouter(); // Initialize the useRouter hook
    
    const handleNavigation = () => {
        router.push(to);  // Navigate to the target route
    };

    return (
        <button
            onClick={handleNavigation}  // Handle the button click to trigger navigation
            className="flex gap-3 items-center p-3 rounded-lg transition-all cursor-pointer duration-[0.3s] ease-[ease] text-slate-500 hover:bg-slate-100 text-left"
        >
            <i className={`ti ti-${icon} text-xl`} />
            <span>{label}</span>
        </button>
    );
}

export default Sidebar;
