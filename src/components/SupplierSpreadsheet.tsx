export interface SupplierSpreadsheetItemProps {
    site: string;
    supplier: string;
    category: string;
    unit: string;
    data: number[];
    total: number;
    carbon: number;
}

export interface SupplierSpreadsheetProps {
    className: string;
    items: SupplierSpreadsheetItemProps[];
}

export function SupplierSpreadsheet ({className="", items}: SupplierSpreadsheetProps) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const len = items[0].data.length;
    console.log("len", len);
    return (
        <article className={`p-6 bg-white rounded-3xl ${className}`}>
            <h3 className="text-2xl font-semibold">Supplier Information</h3>
            <div className="overflow-x-auto max-h-[250px] overflow-y-auto whitespace-nowrap">
                <ul className="flex flex-col gap-4 mt-5 ">
                    <li className="flex justify-between items-center gap-4 min-w-max bg-blue-100 p-1">
                        <div className="w-40">
                            <h4 className="font-medium text-left font-semibold">Site</h4>
                        </div>
                        <div className="w-40">
                            <h4 className="font-medium text-left font-semibold">Supplier</h4>
                        </div>
                        <div className="w-40">
                            <h4 className="font-medium text-left font-semibold">Category</h4>
                        </div>
                        <div className="w-40">
                            <h4 className="font-medium text-left font-semibold">Unit</h4>
                        </div>
                        {months.slice(0, len).map((month, index) => (
                            <div className="w-40 text-left">
                                <h4 className="font-medium font-semibold">{month}</h4>
                            </div>
                        ))}
                        <div className="w-40">
                            <h4 className="font-medium font-semibold text-left">Total</h4>
                        </div>
                        <div className="w-40">
                            <h4 className="font-medium font-semibold text-left">Carbon</h4>
                        </div>
                    </li>
                    {items.map((item, index) => (
                        <SupplierSpreadsheetItem
                            key={index}
                            site={item.site}
                            supplier={item.supplier}
                            category={item.category}
                            unit={item.unit}
                            data={item.data}
                            total={item.total}
                            carbon={item.carbon}
                        />
                    ))}
                </ul>
            </div>
            
        </article>
    )
}

export function SupplierSpreadsheetItem({ site, supplier, category, unit, data, total, carbon }: SupplierSpreadsheetItemProps) {
    return (
        <li  className="flex items-center gap-4 min-w-max">
            <div className="w-40 text-left">
                <h4 className="font-medium">{site}</h4>
            </div>
            <div className="w-40 text-left">
                <h4 className="font-medium">{supplier}</h4>
            </div>
            <div className="w-40 text-left">
                <h4 className="font-medium">{category}</h4>
            </div>
            <div className="w-40 text-left">
                <h4 className="font-medium">{unit}</h4>
            </div>

            {data.slice(0, 8).map((item, index) => (
                <div key={index} className="w-40 text-left">
                    <h4 className="font-medium">{item}</h4>
                </div>
            ))}

            <div className="w-40 text-left">
                <h4 className="font-medium">{total}</h4>
            </div>
            <div className="w-40 text-left">
                <h4 className="font-medium">{carbon}</h4>
            </div>

        </li>
    );
}