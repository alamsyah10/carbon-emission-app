import * as React from "react";

function DashboardHeader() {
    return (
        <header className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:gap-5">
            <div>
                <input
                type="text"
                placeholder="Search"
                className="px-4 py-2.5 bg-white border border-solid border-slate-200 rounded-[30px] w-[300px] max-sm:w-full"
                aria-label="Search"
                />
            </div>
            <div className="flex gap-5 items-center">
                <div className="font-medium">Hi User</div>
                <button className="text-xl text-indigo-600" aria-label="Notifications">
                    <i className="ti ti-bell" />
                </button>
            </div>
        </header>
    );
}

export default DashboardHeader;
