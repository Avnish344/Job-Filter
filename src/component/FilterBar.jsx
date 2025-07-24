import React from "react";

const FilterBar = ({ filters, removeFilter, clearFilters }) => {
    if (filters.length === 0) return null;

    return (
        <div className="bg-white shadow-md p-4 flex flex-wrap gap-4 items-center justify-between rounded-lg -mt-10 z-10 relative">
            <div className="flex flex-wrap gap-3">
                {filters.map((filter, idx) => (
                    <div
                        key={idx}
                        className="flex items-center bg-teal-100 text-teal-800 rounded overflow-hidden"
                    >
                        <span className="px-2">{filter}</span>
                        <button
                            className="bg-teal-800 text-white px-2 hover:bg-gray-700 hover:cursor-pointer"
                            onClick={() => removeFilter(filter)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
            <button
                onClick={clearFilters}
                className="text-teal-700 font-bold hover:underline hover:cursor-pointer"
            >
                Clear
            </button>
        </div>
    );
};

export default FilterBar;
